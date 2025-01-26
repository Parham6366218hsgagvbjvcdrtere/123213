const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'rules', // دستور برای فراخوانی قوانین
    description: 'نمایش قوانین سرور',
    execute(client, message, args) {
        // ساختن Embed
        const embed = new EmbedBuilder()
            .setColor('#0099ff') // رنگ Embed
            .setTitle('📜 قوانین سرور') // عنوان Embed
            .setDescription('لطفاً قوانین زیر را رعایت کنید:') // توضیحات کلی
            .addFields(
                {
                    name: '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
                    value: `**چت را آرام و دوستانه نگه دارید**  
هرگونه اسپم، فحاشی یا تلاش برای آزار و اذیت کسی حتی به شوخی در صورت گزارش شدن 1 روز تایم اوت به همراه دارد.  

**Keep the chat calm and friendly**  
Any spam, profanity, or attempt to harass someone, even jokingly, will result in a 1-day timeout if reported.`,
                },
                {
                    name: '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
                    value: `**مطالب +18**  
هر پیامی که حاوی مطالبی باشد که برای افراد زیر ۱۸ سال مناسب نباشد، غیرمجاز شناخته می‌شود و ۱ روز تایم اوت به همراه دارد.  

**Content +18**  
Any message containing content not suitable for people under the age of 18 will result in a 1-day timeout.`,
                },
                {
                    name: '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
                    value: `**تبلیغات**  
هر نوع تبلیغی مثل تبلیغ کردن کانال یا معرفی سرورهای دیگر ۷ روز تایم اوت به همراه دارد.  
همچنین تبلیغ در دی‌ام کسی در صورتی که ایشان ناراضی باشد و این عمل را گزارش کند بن به همراه دارد.  

**Advertising**  
Any type of advertisement, such as promoting a channel or introducing other servers, results in a 7-day timeout. Advertising in someone's DM carries a ban if the recipient is unhappy and reports it.`,
                },
                {
                    name: '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
                    value: `**گروه‌های مختلف**  
هرگونه توهین به نژاد، رنگ پوست، قومیت، دیدگاه، دین و مذهب، علایق، جنسیت و گرایش فرد یا دسته‌ای از افراد غیرقانونی بوده و ۱ روز تایم اوت به همراه دارد.  

**Various Groups**  
Any insult to race, skin color, ethnicity, opinion, religion, interests, gender, or orientation of a person or group of people is illegal and will result in a 1-day timeout.`,
                },
                {
                    name: '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
                    value: `**چنل‌ها**  
هر چنل برای کاری بخصوص ساخته شده است. انجام یک کار در چنل‌های غیرمربوط ۱ روز تایم اوت به همراه دارد.  

**Channels**  
Each channel is made for a specific purpose. Doing tasks in unrelated channels will result in a 1-day timeout.  

**مثال / Example:**  
- فقط در چنل میم، میم ارسال کنید.  
- در بخش مدیا فقط عکس و فایل ارسال کنید.  
- فقط در چت عمومی چت کنید.`,
                },
                {
                    name: '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
                    value: `**امنیت فایل‌ها**  
ارسال هرگونه فایلی که حاوی Jump Scare باشد غیرمجاز است و ۱ روز تایم اوت به همراه دارد.  
ارسال هرگونه فایل مخرب که باعث کرش شدن دیسکورد یا برنامه‌ای دیگر شود بن به همراه دارد.  
ارسال هرگونه بدافزار (ویروس) بن به همراه دارد.  

**File Security**  
Sending files with Jump Scare is not allowed and results in a 1-day timeout. Sending malicious files that crash Discord or other programs results in a ban. Sending malware (viruses) will result in a ban.`,
                }
            )
            .setFooter({
                text: 'با تشکر از همکاری شما!',
                iconURL: 'https://example.com/icon.png', // آدرس آیکون دلخواه
            });

        // ارسال Embed به کانال
        message.channel.send({ embeds: [embed] });
    },
};
