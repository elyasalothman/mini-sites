# الخزانة · Mini Sites

اثنان وثلاثون موقعًا صغيرًا مستقلًا — كل مجلد موقع كامل (HTML/CSS/JS) يعمل لوحده.

**العنوان الرسمي فقط:** [https://khazana.alhajda.com](https://khazana.alhajda.com)

لا تستخدم `workers.dev` ولا `luma.alhajda.com` ولا `github.io` كعنوان رسمي.

## التشغيل محليًا

افتح `index.html` في المتصفح، أو من المجلد:

```bash
python3 -m http.server 8080
```

أو عبر العامل:

```bash
npm install
npx wrangler dev
```

ثم زر كل موقع على `/اسم-الموقع/`.

## النشر

هذا المستودع يُنشر كعامل Cloudflare اسمه `khazana`. **لا تفعّل GitHub Pages** على هذا المستودع: نطاق `github.io` المخصص هو `luma.alhajda.com` (لمعة)، وتفعيله هنا يخطف لمعة.

```bash
npx wrangler deploy
```

بعد أول نشر، اربط DNS:

- `khazana.alhajda.com` → هذا العامل (`khazana`)
- إن كانت المنطقة على Cloudflare، يضيف `wrangler deploy` النطاق المخصص من `wrangler.jsonc`
- إن لم يُنشأ السجل تلقائيًا: CNAME (أو سجل العامل) لـ `khazana.alhajda.com` يشير إلى العامل `khazana`

النجاح: `https://khazana.alhajda.com` يعرض الدليل، و`https://khazana.alhajda.com/mashrabiya/` يفتح المشربية.

## المواقع

| المجلد | الاسم |
|---|---|
| mashrabiya | المشربية |
| qalam | القلم |
| karak | كرك |
| dunes | كثبان |
| abjad | أبجد |
| oud | عود |
| kilim | كليم |
| sundial | مزولة |
| stoop | انقضاض |
| asterism | نجمة |
| finjan | فنجان |
| caravan | قافلة |
| fanous | فانوس |
| afterimage | أثر |
| shortwave | موجة |
| waxseal | ختم |
| balance | ميزان |
| nakheel | نخيل |
| lampmorse | مصباح |
| wadi | وادي |
| attar | عطر |
| deskmoon | قمر المكتب |
| mirage | سراب |
| hourglass | ساعة رمل |
| diwan | ديوان |
| sonar | صدى |
| arud | عروض |
| barjeel | برجيل |
| inklab | مختبر الحبر |
| pearl | لؤلؤ |
| zellige | زليج |
| harmonograph | منسج |
