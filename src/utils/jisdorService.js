const axios = require('axios');
const xml2js = require('xml2js');

const BI_API_URL = 'https://www.bi.go.id/biwebservice/wskursbi.asmx/getSubKursJisdor2';
const DEFAULT_FALLBACK_RATE = 15500;

async function fetchJisdorFromBI(date) {
  try {
    const dateStr = formatDateForBI(date);
    
    const response = await axios.get(BI_API_URL, {
      params: { tgl: dateStr },
      timeout: 10000,
      headers: {
        'User-Agent': 'CostTrack/1.0'
      }
    });
    
    const parser = new xml2js.Parser({ 
      explicitArray: false,
      ignoreAttrs: false,
      trim: true
    });
    
    const result = await parser.parseStringPromise(response.data);
    
    // Parse XML response dari BI
    let rate = null;
    
    if (result && result.DataSet && result.DataSet.diffgram) {
      const data = result.DataSet.diffgram.NewDataSet;
      if (data && data.Table) {
        const tables = Array.isArray(data.Table) ? data.Table : [data.Table];
        const usdData = tables.find(t => t.mts === 'USD' || t.mts === 'US$');
        
        if (usdData) {
          // Try different possible field names
          const kursValue = usdData.kurs_jual || usdData.kurs || usdData.nilai;
          if (kursValue) {
            rate = parseFloat(String(kursValue).replace(/,/g, ''));
          }
        }
      }
    }
    
    // Validate rate
    if (rate && rate > 1000 && rate < 100000) {
      console.log(`✓ JISDOR fetched successfully for ${dateStr}: ${rate}`);
      return {
        rate: Math.round(rate),
        source: 'JISDOR'
      };
    }
    
    throw new Error('Invalid rate from JISDOR API');
    
  } catch (error) {
    console.error(`✗ Error fetching JISDOR for ${formatDateForBI(date)}:`, error.message);
    
    // Return fallback rate
    return {
      rate: DEFAULT_FALLBACK_RATE,
      source: 'FALLBACK'
    };
  }
}

function formatDateForBI(date) {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

module.exports = { fetchJisdorFromBI };
