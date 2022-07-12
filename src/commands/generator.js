const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")
const fetch = require("node-fetch")

module.exports = {
    data: new SlashCommandBuilder()
    .setName("generate")
    .setDescription("Generate an Umbrella Key")
    .addSubcommand(subCommand => subCommand.setName("alpha").setDescription("Generates Alpha Key")
    .addStringOption(option => option.setName("password").setDescription("Input password").setRequired(true))
    .addIntegerOption(option => option.setName("max-usage").setDescription("Input max-usage").setRequired(true))
    .addBooleanOption(option => option.setName("bot-protection").setDescription("true / false").setRequired(true))
    .addStringOption(option => option.setName("group").setDescription("Input Cookgroup")))

    .addSubcommand(subCommand => subCommand.setName("weekly").setDescription("Generates Weekly Key")
    .addStringOption(option => option.setName("password").setDescription("Input password").setRequired(true))
    .addIntegerOption(option => option.setName("max-usage").setDescription("Input max-usage").setRequired(true))
    .addBooleanOption(option => option.setName("bot-protection").setDescription("true / false").setRequired(true))
    .addStringOption(option => option.setName("group").setDescription("Input Cookgroup")))

    .addSubcommand(subCommand => subCommand.setName("daily").setDescription("Generates Daily Key")
    .addStringOption(option => option.setName("password").setDescription("Input password").setRequired(true))
    .addIntegerOption(option => option.setName("max-usage").setDescription("Input max-usage").setRequired(true))
    .addBooleanOption(option => option.setName("bot-protection").setDescription("true / false").setRequired(true))
    .addStringOption(option => option.setName("group").setDescription("Input Cookgroup")))

    .addSubcommand(subCommand => subCommand.setName("fnf").setDescription("Generates Family and Friends Key")
    .addStringOption(option => option.setName("password").setDescription("Input password").setRequired(true))
    .addIntegerOption(option => option.setName("max-usage").setDescription("Input max-usage").setRequired(true))
    .addBooleanOption(option => option.setName("bot-protection").setDescription("true / false").setRequired(true))
    .addStringOption(option => option.setName("group").setDescription("Input Cookgroup")))

    .addSubcommand(subCommand => subCommand.setName("partner").setDescription("Generates Partner Key")
    .addStringOption(option => option.setName("password").setDescription("Input password").setRequired(true))
    .addIntegerOption(option => option.setName("max-usage").setDescription("Input max-usage").setRequired(true))
    .addBooleanOption(option => option.setName("bot-protection").setDescription("true / false").setRequired(true))
    .addStringOption(option => option.setName("group").setDescription("Input Cookgroup"))),
    


    async execute(interaction) {
        switch(interaction.options.getSubcommand()) {
            case "alpha": {
                async function generateKey() {
                    const password = interaction.options.getString('password');
                    const max_usage = interaction.options.getInteger('max-usage');
                    const bot_protection = interaction.options.getBoolean('bot-protection');
                    const group = interaction.options.getString('group');
                    const plans = {Alpha:"DyIf5zdCO3YFcRLLxpZ_J",fnf:"wFbAtEYKRVc4Yop94tIQW",Partner:"et6_IYi7_2xrVC_d5vP6u",}
                    const options = {
                      method: 'POST',
                      headers: {
                        Accept: 'application/json',
                        Authorization: 'Bearer sk_1OX6VSkeU2HgAk5OfMjutvwf5FznsjxB',
                        'Content-Type': 'application/json'
                      },
                      body: JSON.stringify({
                        plan: "DyIf5zdCO3YFcRLLxpZ_J",
                        password: password,
                        enable_bot_protection: bot_protection,
                        max_usages: max_usage,
                        
                      })
                    };
                    async function getKeyData() {
                    let request = fetch('https://api.hyper.co/v6/links', options).then(res => res.json())
                    let obj = JSON.stringify(await request)
                    let keyData = JSON.parse(obj)
                    let key = `https://hpr.co/${await keyData.id}?password=${await keyData.password}`
                    
                    return key

                    }

                    async function groupData() {
                        if(!group) {
                        let groupName = ""
                        return groupName
                    } else {
                        return group
                    }
                }

                    interaction.reply({embeds: [
                        new MessageEmbed()
                        .setColor('#0670f5')
                        .setDescription(`
                        **Key Informations**

                        **Type**: Umbrella Alpha Key

                        **Group:** ${await groupData()}
                        
                        **Max Usage:** ${max_usage}       
                        
                        **Password:** ||${password} ||

                        **Bot Protection:** ${bot_protection}
                        
                        ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬`)
                        .addFields ([
                            {
                            name: "Link",
                            value:`\`\`\`${await getKeyData()}\`\`\``
                            }
                            
                        ])
                        .setTimestamp()
                        .setFooter({ text: 'Umbrella Key Generator', iconURL: 'https://i.imgur.com/5vyMNRm.png' })
                    ]})
                }

                    generateKey()
                break
            }
            case "fnf": {
                async function generateKey() {
                    const password = interaction.options.getString('password');
                    const max_usage = interaction.options.getInteger('max-usage');
                    const bot_protection = interaction.options.getBoolean('bot-protection');
                    const group = interaction.options.getString('group');
                    const plans = {Alpha:"DyIf5zdCO3YFcRLLxpZ_J",fnf:"wFbAtEYKRVc4Yop94tIQW",Partner:"et6_IYi7_2xrVC_d5vP6u",}
                    const options = {
                      method: 'POST',
                      headers: {
                        Accept: 'application/json',
                        Authorization: 'Bearer sk_1OX6VSkeU2HgAk5OfMjutvwf5FznsjxB',
                        'Content-Type': 'application/json'
                      },
                      body: JSON.stringify({
                        plan: "wFbAtEYKRVc4Yop94tIQW",
                        password: password,
                        enable_bot_protection: bot_protection,
                        max_usages: max_usage,
                        
                      })
                    };
                    async function getKeyData() {
                    let request = fetch('https://api.hyper.co/v6/links', options).then(res => res.json())
                    let obj = JSON.stringify(await request)
                    let keyData = JSON.parse(obj)
                    let key = `https://hpr.co/${await keyData.id}?password=${await keyData.password}`
                    
                    return key

                    }

                    async function groupData() {
                        if(!group) {
                        let groupName = ""
                        return groupName
                    } else {
                        return group
                    }
                }

                    interaction.reply({embeds: [
                        new MessageEmbed()
                        .setColor('#0670f5')
                        .setDescription(`
                        **Key Informations**

                        **Type**: Umbrella Family and Friends Key

                        **Group:** ${await groupData()}
                        
                        **Max Usage:** ${max_usage}       
                        
                        **Password:** ||${password} ||

                        **Bot Protection:** ${bot_protection}
                        
                        ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬`)
                        .addFields ([
                            {
                            name: "Link",
                            value:`\`\`\`${await getKeyData()}\`\`\``
                            }
                            
                        ])
                        .setTimestamp()
                        .setFooter({ text: 'Umbrella Key Generator', iconURL: 'https://i.imgur.com/5vyMNRm.png' })
                    ]})
                }

                    generateKey()
                break
            }
            case "partner": {
                async function generateKey() {
                    const password = interaction.options.getString('password');
                    const max_usage = interaction.options.getInteger('max-usage');
                    const bot_protection = interaction.options.getBoolean('bot-protection');
                    const group = interaction.options.getString('group');
                    const plans = {Alpha:"DyIf5zdCO3YFcRLLxpZ_J",fnf:"wFbAtEYKRVc4Yop94tIQW",Partner:"et6_IYi7_2xrVC_d5vP6u",}
                    const options = {
                      method: 'POST',
                      headers: {
                        Accept: 'application/json',
                        Authorization: 'Bearer sk_1OX6VSkeU2HgAk5OfMjutvwf5FznsjxB',
                        'Content-Type': 'application/json'
                      },
                      body: JSON.stringify({
                        plan: "et6_IYi7_2xrVC_d5vP6u",
                        password: password,
                        enable_bot_protection: bot_protection,
                        max_usages: max_usage,
                        
                      })
                    };
                    async function getKeyData() {
                    let request = fetch('https://api.hyper.co/v6/links', options).then(res => res.json())
                    let obj = JSON.stringify(await request)
                    let keyData = JSON.parse(obj)
                    let key = `https://hpr.co/${await keyData.id}?password=${await keyData.password}`
                    
                    return key

                    }

                    async function groupData() {
                        if(!group) {
                        let groupName = ""
                        return groupName
                    } else {
                        return group
                    }
                }

                    interaction.reply({embeds: [
                        new MessageEmbed()
                        .setColor('#0670f5')
                        .setDescription(`
                        **Key Informations**

                        **Type**: Umbrella Partner Key

                        **Group:** ${await groupData()}
                        
                        **Max Usage:** ${max_usage}       
                        
                        **Password:** ||${password} ||

                        **Bot Protection:** ${bot_protection}
                        
                        ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬`)
                        .addFields ([
                            {
                            name: "Link",
                            value:`\`\`\`${await getKeyData()}\`\`\``
                            }
                            
                        ])
                        .setTimestamp()
                        .setFooter({ text: 'Umbrella Key Generator', iconURL: 'https://i.imgur.com/5vyMNRm.png' })
                    ]})
                }

                    generateKey()
                break
            } 
            case "weekly": {
                async function generateKey() {
                    const password = interaction.options.getString('password');
                    const max_usage = interaction.options.getInteger('max-usage');
                    const bot_protection = interaction.options.getBoolean('bot-protection');
                    const group = interaction.options.getString('group');
                    const plans = {Alpha:"DyIf5zdCO3YFcRLLxpZ_J",fnf:"wFbAtEYKRVc4Yop94tIQW",Partner:"et6_IYi7_2xrVC_d5vP6u",Weeklie:"8RegXAEdwQVGSm9YlsKQ6",Daily:"-5UTYNdeZ8M4VRWvKvsNE"}
                    const options = {
                      method: 'POST',
                      headers: {
                        Accept: 'application/json',
                        Authorization: 'Bearer sk_1OX6VSkeU2HgAk5OfMjutvwf5FznsjxB',
                        'Content-Type': 'application/json'
                      },
                      body: JSON.stringify({
                        plan: "8RegXAEdwQVGSm9YlsKQ6",
                        password: password,
                        enable_bot_protection: bot_protection,
                        max_usages: max_usage,
                        
                      })
                    };
                    async function getKeyData() {
                    let request = fetch('https://api.hyper.co/v6/links', options).then(res => res.json())
                    let obj = JSON.stringify(await request)
                    let keyData = JSON.parse(obj)
                    let key = `https://hpr.co/${await keyData.id}?password=${await keyData.password}`
                    
                    return key

                    }

                    async function groupData() {
                        if(!group) {
                        let groupName = ""
                        return groupName
                    } else {
                        return group
                    }
                }

                    interaction.reply({embeds: [
                        new MessageEmbed()
                        .setColor('#0670f5')
                        .setDescription(`
                        **Key Informations**

                        **Type**: Umbrella Weekly Key

                        **Group:** ${await groupData()}
                        
                        **Max Usage:** ${max_usage}       
                        
                        **Password:** ||${password} ||

                        **Bot Protection:** ${bot_protection}
                        
                        ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬`)
                        .addFields ([
                            {
                            name: "Link",
                            value:`\`\`\`${await getKeyData()}\`\`\``
                            }
                            
                        ])
                        .setTimestamp()
                        .setFooter({ text: 'Umbrella Key Generator', iconURL: 'https://i.imgur.com/5vyMNRm.png' })
                    ]})
                }

                    generateKey()  
                break
            }
             case "daily": {
                async function generateKey() {
                    const password = interaction.options.getString('password');
                    const max_usage = interaction.options.getInteger('max-usage');
                    const bot_protection = interaction.options.getBoolean('bot-protection');
                    const group = interaction.options.getString('group');
                    const plans = {Alpha:"DyIf5zdCO3YFcRLLxpZ_J",fnf:"wFbAtEYKRVc4Yop94tIQW",Partner:"et6_IYi7_2xrVC_d5vP6u",Weeklie:"8RegXAEdwQVGSm9YlsKQ6",Daily:"-5UTYNdeZ8M4VRWvKvsNE"}
                    const options = {
                      method: 'POST',
                      headers: {
                        Accept: 'application/json',
                        Authorization: 'Bearer sk_1OX6VSkeU2HgAk5OfMjutvwf5FznsjxB',
                        'Content-Type': 'application/json'
                      },
                      body: JSON.stringify({
                        plan: "-5UTYNdeZ8M4VRWvKvsNE",
                        password: password,
                        enable_bot_protection: bot_protection,
                        max_usages: max_usage,
                        
                      })
                    };
                    async function getKeyData() {
                    let request = fetch('https://api.hyper.co/v6/links', options).then(res => res.json())
                    let obj = JSON.stringify(await request)
                    let keyData = JSON.parse(obj)
                    let key = `https://hpr.co/${await keyData.id}?password=${await keyData.password}`
                    
                    return key

                    }

                    async function groupData() {
                        if(!group) {
                        let groupName = ""
                        return groupName
                    } else {
                        return group
                    }
                }

                    interaction.reply({embeds: [
                        new MessageEmbed()
                        .setColor('#0670f5')
                        .setDescription(`
                        **Key Informations**

                        **Type**: Umbrella Daily Key

                        **Group:** ${await groupData()}
                        
                        **Max Usage:** ${max_usage}       
                        
                        **Password:** ||${password} ||

                        **Bot Protection:** ${bot_protection}
                        
                        ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬`)
                        .addFields ([
                            {
                            name: "Link",
                            value:`\`\`\`${await getKeyData()}\`\`\``
                            }
                            
                        ])
                        .setTimestamp()
                        .setFooter({ text: 'Umbrella Key Generator', iconURL: 'https://i.imgur.com/5vyMNRm.png' })
                    ]})
                }

                    generateKey()  
                break
             } 
        }
    }
}