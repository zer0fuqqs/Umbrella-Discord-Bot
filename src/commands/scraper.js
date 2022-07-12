const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")
const fetch = require("node-fetch")
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

let size = [];
let sku = [];
let stock = [];
let img;
let basePid;
let datetime;
let name;
let price;
let dropmode;
let query_fr = "femme";
let query_it = "catalogo";
let query_es = "catalogo";
let query_nl = "catalogus";
let query_be = "catalogus";
let query_at = "katalog";
let query_ch = "katalog";
let query_cz = "katalog";
let query_pl = "katalog";
let query_dk = "katalog";
let query_no = "katalog";


async function scrapeProduct(link) {
    const response =  await fetch(link).then(res => res.text())
    let doc = new JSDOM(response, {contentType: "text/html",}).window.document;
    img = doc.querySelectorAll("img.RYghuO")[0].src
    datetime = doc.querySelector("h2.RYghuO").textContent.replace("Januar","January").replace("Februar","February").replace("März","March").replace("Mai","May").replace("Juni","June").replace("Juni","July").replace("Oktober","October").replace("Dezember","December")
    let sizesAndSkusId = link.split("/")[3].replace(".html","")
    let getRequiredScriptData = doc.body.querySelectorAll('script')[3].textContent
    let sizesAndSkus = JSON.parse(getRequiredScriptData).graphqlCache[`{"id":"3cbcb551386476489f3ea05d361fc0c6a15c13fb7678d667fc79952db14f23fa","variables":{"id":"ern:product:uri:${sizesAndSkusId}"}}`].data
    name = sizesAndSkus.product.name
    basePid = sizesAndSkus.product.sku
    price = sizesAndSkus.product.displayPrice.original.formatted
    if (doc.querySelector("h2.pVrzNP").innerHTML == "Early Access") {
        dropmode = "PLUS" 
        datetime = doc.querySelector("div.csmaMi").querySelectorAll("span")[2].textContent.replace("Januar","January").replace("Februar","February").replace("März","March").replace("Mai","May").replace("Juni","June").replace("Juni","July").replace("Oktober","October").replace("Dezember","December")
    } else {
        dropmode = "NORMAL"
    }
      for (let i = 0; i - sizesAndSkus.product.simples.length; i++) {
          size.push(`${sizesAndSkus.product.simples[i].size}\n` );
          sku.push(`${sizesAndSkus.product.simples[i].sku}\n`);
          stock.push(`${sizesAndSkus.product.simples[i].offer.stock.quantity}\n`)
      } 
      region_de = `[:flag_de:](https://www.zalando.de/katalog/?search_context=all&q=${basePid})`
      region_at = `[:flag_at:](https://www.zalando.at/${query_at}/?search_context=all&q=${basePid})`
      region_nl = `[:flag_nl:](https://www.zalando.nl/${query_nl}/?search_context=all&q=${basePid})`
      region_es = `[:flag_es:](https://www.zalando.es/${query_es}/?search_context=all&q=${basePid})`
      region_be = `[:flag_be:](https://www.zalando.be/${query_be}/?search_context=all&q=${basePid})`
      region_cz = `[:flag_cz:](https://www.zalando.cz/${query_cz}/?search_context=all&q=${basePid})`
      region_ch = `[:flag_ch:](https://www.zalando.ch/${query_ch}/?search_context=all&q=${basePid})`
      region_it = `[:flag_it:](https://www.zalando.it/${query_it}/?search_context=all&q=${basePid})`
      region_fr = `[:flag_fr:](https://www.zalando.fr/${query_fr}/?search_context=all&q=${basePid})`
      region_pl = `[:flag_pl:](https://www.zalando.pl/${query_pl}/?search_context=all&q=${basePid})`
      region_dk = `[:flag_dk:](https://www.zalando.dk/${query_dk}/?search_context=all&q=${basePid})`
      region_no = `[:flag_no:](https://www.zalando.no/${query_no}/?search_context=all&q=${basePid})`
      console.log(datetime)
  }


function clearList() {
     size = [];
     sku = [];
     stock = [];
  }

module.exports = {
    data: new SlashCommandBuilder()
    .setName("scraper")
    .setDescription("Umbrella Zalando Scraper")
    .addStringOption(option => option.setName("link").setDescription("Release Link").setRequired(true))
    .addStringOption(option => option.setName("time").setDescription("Release Time").setRequired(true)),
    
 
    async execute(interaction) {
        const link = interaction.options.getString('link');
        const time = interaction.options.getString('time');
         await scrapeProduct(link);
                interaction.reply({embeds: [
                        new MessageEmbed()
                        .setTitle(name)
                        .setURL(link)
                        .setThumbnail(img)
                        .setColor('#0670f5')
                        .addFields ([

                            {
                            name: "Retail",
                            value:`${price}`,
                            inline:true      
                            },
                            {
                            name: "Base PID",
                            value:`${await basePid}`,
                            inline:true      
                            },
                            {
                            name: "Date & Time",
                            value:`${datetime} __**${time}**__`,
                            inline:true      
                            },

                            {
                            name: "\u200b",
                            value:"\u200b",
                            inline:true      
                            },
                            {
                            name: "\u200b",
                            value:"\u200b",
                            inline:true      
                            },
                            {
                            name: "\u200b",
                            value:"\u200b",
                            inline:true      
                            },

                            {
                            name: "Release",
                            value:`${dropmode}`,
                            inline:false     
                            },

                            {
                            name: "SIZES",
                            value:`\`\`\`${await String(size).replaceAll(",","")}\`\`\``,
                            inline:true    
                            },
                            {
                            name: "SKU",
                            value:`\`\`\`${await String(sku).replaceAll(",","")}\`\`\``,
                            inline:true      
                            },
                            {
                            name: "STOCK",
                            value:`\`\`\`${await String(stock).replaceAll(",","")}\`\`\``,
                            inline:true      
                            },

                            {
                            name: "\u200b",
                            value:"\u200b",
                            inline:true      
                            },
                            {
                            name: "\u200b",
                            value:"\u200b",
                            inline:true      
                            },
                            {
                            name: "\u200b",
                            value:"\u200b",
                            inline:true      
                            },
                            
                            {
                            name: "Region Links",
                            value:`${region_de}ㅤ${region_at}ㅤ${region_nl}ㅤ${region_es}ㅤ${region_be}ㅤ${region_cz}ㅤ${region_ch}ㅤ${region_it}ㅤ${region_fr}ㅤ${region_pl}ㅤ${region_dk}ㅤ${region_no} `,
                            inline:true      
                            }
       
                        ])
                        .setTimestamp()
                        .setFooter({ text: 'Umbrella Scraper ', iconURL: 'https://i.imgur.com/5vyMNRm.png' })
                    ]})
                                  
    
    clearList();            }
                
}               
            
            
            
        
    
    
