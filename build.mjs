import fs from 'node:fs';
import path from 'node:path';
const OUT = 'dist';
fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(OUT, { recursive: true });
fs.cpSync('assets', path.join(OUT, 'assets'), { recursive: true });
fs.copyFileSync('app.js', path.join(OUT, 'assets/app.js'));

const WA = '966500000000'; // demo placeholder, replace with the real number
const SITE = { ar: 'سكينة', en: 'Sakina' };
const T = (ar, en) => ({ ar, en });

/* ---------- svg art ---------- */
const star = (c = '#fff') => `<svg xmlns="http://www.w3.org/2000/svg" width="0" height="0"><defs><pattern id="geo" width="60" height="60" patternUnits="userSpaceOnUse"><path d="M30 4l7 17 17-7-7 17 17 7-17 7 7 17-17-7-7 17-7-17-17 7 7-17-17-7 17-7-7-17 17 7z" fill="none" stroke="${c}" stroke-width="1"/></pattern></defs></svg>`;
const pattern = `<svg class="pattern" width="100%" height="100%" aria-hidden="true"><rect width="100%" height="100%" fill="url(#geo)"/></svg>`;
const logo = `<svg viewBox="0 0 40 40" aria-hidden="true"><circle cx="20" cy="20" r="19" fill="#0f3d2e"/><path d="M26 10a11 11 0 1 0 0 20 9 9 0 1 1 0-20z" fill="#e6c878"/><path d="M27 20l1.4 3.2 3.4.4-2.5 2.3.7 3.4-3-1.7-3 1.7.7-3.4-2.5-2.3 3.4-.4z" fill="#e6c878" transform="translate(-1 -6) scale(.9)"/></svg>`;
const skyline = `<svg class="skyline" viewBox="0 0 1200 160" preserveAspectRatio="none" aria-hidden="true"><path fill="#faf6ec" d="M0 160V120h60v-14h20V90q20-34 40 0v16h20v14h50V70h10V40q0-12 6-26 6 14 6 26v30h10v50h40v-30h30q14-40 28 0h30v30h60v-26h16q22-48 44 0v26h40V80h8V50q0-10 5-22 5 12 5 22v30h8v40h50v-14h30q0-30 30-30t30 30h20v14h50V96h14V80h10v16h14v24h60v-34q30-60 60 0v34h50V90h8V60q0-10 5-20 5 10 5 20v30h8v30h70v-20h20q14-30 28 0v20h54v-16h40v16h40v40z"/></svg>`;
const motif = (kind, a, b) => {
  const fig = {
    kaaba: `<rect x="150" y="60" width="100" height="90" fill="#111" rx="3"/><rect x="150" y="78" width="100" height="8" fill="#e6c878"/><rect x="150" y="150" width="100" height="6" fill="#0003"/>`,
    dome: `<path d="M140 150v-34h120v34z" fill="#fff9"/><path d="M150 116q50-80 100 0z" fill="#fff"/><rect x="198" y="52" width="4" height="22" fill="#e6c878"/><circle cx="200" cy="50" r="5" fill="#e6c878"/><rect x="108" y="70" width="14" height="80" fill="#fff9"/><rect x="278" y="70" width="14" height="80" fill="#fff9"/><path d="M108 70l7-18 7 18zM278 70l7-18 7 18z" fill="#fff"/>`,
    moon: `<path d="M240 60a46 46 0 1 0 0 90 38 38 0 1 1 0-90z" fill="#e6c878"/><circle cx="270" cy="82" r="3" fill="#fff"/><circle cx="290" cy="110" r="2" fill="#fff"/><circle cx="165" cy="70" r="2" fill="#fff"/><path d="M110 150h180v6H110z" fill="#fff6"/>`,
    mina: `<path d="M60 150l50-60 40 40 50-70 50 60 50-50 40 80z" fill="#fff5"/><path d="M90 150l40-48 34 34 36-50 40 50 40-40 34 54z" fill="#fff9"/><circle cx="300" cy="62" r="16" fill="#e6c878"/>`,
    star: `<path d="M200 46l14 36 38 4-29 25 9 38-32-21-32 21 9-38-29-25 38-4z" fill="#e6c878"/><path d="M110 150h180v6H110z" fill="#fff6"/>`
  }[kind];
  return `<svg viewBox="0 0 400 225" preserveAspectRatio="xMidYMid slice" role="img" aria-hidden="true"><defs><linearGradient id="g${kind}${a.slice(1)}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${b}"/></linearGradient></defs><rect width="400" height="225" fill="url(#g${kind}${a.slice(1)})"/><rect width="400" height="225" fill="url(#geo)" opacity=".12"/>${fig}</svg>`;
};
const heroArt = `<svg class="hero-art" viewBox="0 0 400 400" aria-hidden="true"><circle cx="200" cy="200" r="190" fill="none" stroke="#e6c878" stroke-opacity=".4" stroke-dasharray="3 8"/><circle cx="200" cy="200" r="150" fill="#ffffff10"/><circle cx="200" cy="200" r="120" fill="#ffffff12"/><path d="M250 100a105 105 0 1 0 0 200 85 85 0 1 1 0-200z" fill="#e6c878"/><path d="M175 300v-60h50v60z" fill="#111" /><rect x="175" y="252" width="50" height="6" fill="#e6c878"/><path d="M262 150l9 20 22 3-16 15 4 22-19-11-19 11 4-22-16-15 22-3z" fill="#fff"/></svg>`;
const icons = {
  shield: '<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M8.5 12l2.5 2.5L16 9.5"/>',
  hotel: '<path d="M3 20V8l9-5 9 5v12"/><path d="M9 20v-6h6v6"/>',
  users: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c0-4 3-6 6.5-6s6.5 2 6.5 6"/><circle cx="17" cy="9" r="2.5"/><path d="M17.5 14c2.5 0 4 1.5 4 4.5"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  bus: '<rect x="4" y="4" width="16" height="13" rx="3"/><path d="M4 11h16M8 20v-3M16 20v-3"/><circle cx="8" cy="14" r=".8"/><circle cx="16" cy="14" r=".8"/>',
  book: '<path d="M4 4h10a4 4 0 0 1 4 4v12H8a4 4 0 0 1-4-4z"/><path d="M8 8h6"/>',
  doc: '<path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4M9 12h6M9 16h6"/>',
  heart: '<path d="M12 20s-8-5-8-11a4.5 4.5 0 0 1 8-2.5A4.5 4.5 0 0 1 20 9c0 6-8 11-8 11z"/>'
};
const ic = k => `<span class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[k]}</svg></span>`;

/* ---------- data ---------- */
const packages = [
  { id: 'umrah-economy', cat: 'umrah', days: 8, price: 4900, kind: 'kaaba', c: ['#165a43', '#0b2e22'],
    name: T('العمرة الاقتصادية', 'Economy Umrah'), tag: T('الأكثر طلباً', 'Most booked'),
    sum: T('ثمانية أيام بسعر مناسب وبرنامج مريح وفنادق قريبة.', 'Eight days at a fair price with a relaxed program and nearby hotels.'),
    mk: T('٤ ليالٍ في مكة المكرمة', '4 nights in Makkah'), md: T('٣ ليالٍ في المدينة المنورة', '3 nights in Madinah'),
    inc: [T('تأشيرة العمرة', 'Umrah visa'), T('تذكرة الطيران ذهاب وعودة', 'Return flight'), T('إقامة في فندق ٣ نجوم', '3-star hotel stay'), T('النقل بين المدن بحافلة مكيفة', 'Air-conditioned transfers between cities'), T('مرشد ديني مرافق', 'Accompanying religious guide'), T('وجبة الإفطار يومياً', 'Daily breakfast')],
    exc: [T('الوجبات الرئيسية الأخرى', 'Other main meals'), T('المصاريف الشخصية', 'Personal expenses'), T('تأمين السفر الإضافي', 'Extra travel insurance')],
    plan: [[T('الوصول إلى جدة', 'Arrival in Jeddah'), T('الاستقبال في المطار والانتقال إلى مكة المكرمة وتسكين الفندق.', 'Airport reception, transfer to Makkah and hotel check-in.')],
      [T('أداء العمرة', 'Performing Umrah'), T('الإحرام والطواف والسعي والتحلل مع المرشد.', 'Ihram, tawaf, sa’i and halq with the guide.')],
      [T('أيام العبادة في مكة', 'Days of worship in Makkah'), T('وقت حر للصلاة في الحرم مع محاضرة يومية بعد العشاء.', 'Free time for prayer in the Haram with a short talk after Isha.')],
      [T('زيارات مكة', 'Makkah visits'), T('جولة تعريفية بالمشاعر والمعالم الإسلامية.', 'An introductory tour of the holy sites and Islamic landmarks.')],
      [T('الانتقال إلى المدينة', 'Travel to Madinah'), T('رحلة مريحة إلى المدينة المنورة والإقامة بالقرب من المسجد النبوي.', 'A comfortable trip to Madinah and check-in near the Prophet’s Mosque.')],
      [T('الروضة والمسجد النبوي', 'Rawdah and the Prophet’s Mosque'), T('زيارة منظمة مع إرشادات الآداب.', 'An organised visit with guidance on etiquette.')],
      [T('زيارات المدينة', 'Madinah visits'), T('قباء وأحد وقبلتين مع شرح مبسط.', 'Quba, Uhud and Qiblatain with simple explanations.')],
      [T('المغادرة', 'Departure'), T('الانتقال إلى المطار والعودة بسلامة الله.', 'Transfer to the airport and safe return.')]] },
  { id: 'umrah-ramadan', cat: 'umrah', days: 10, price: 7900, kind: 'moon', c: ['#2c2a5a', '#0e1a3a'],
    name: T('عمرة رمضان', 'Ramadan Umrah'), tag: T('موسمية', 'Seasonal'),
    sum: T('عشرة أيام في أفضل أوقات العام مع إفطار جماعي وبرنامج روحاني.', 'Ten days in the best time of the year with group iftar and a spiritual program.'),
    mk: T('٦ ليالٍ في مكة المكرمة', '6 nights in Makkah'), md: T('٣ ليالٍ في المدينة المنورة', '3 nights in Madinah'),
    inc: [T('تأشيرة العمرة', 'Umrah visa'), T('تذكرة الطيران ذهاب وعودة', 'Return flight'), T('فندق ٤ نجوم بالقرب من الحرم', '4-star hotel close to the Haram'), T('وجبتا الإفطار والسحور', 'Iftar and suhoor meals'), T('مرشد ومشرف لكل ٢٠ معتمراً', 'One guide and supervisor per 20 pilgrims'), T('النقل الداخلي', 'Internal transfers')],
    exc: [T('المصاريف الشخصية', 'Personal expenses'), T('تأمين السفر الإضافي', 'Extra travel insurance')],
    plan: [[T('الوصول', 'Arrival'), T('الاستقبال والانتقال إلى مكة المكرمة.', 'Reception and transfer to Makkah.')],
      [T('العمرة', 'Umrah'), T('أداء المناسك بعد الراحة.', 'Perform the rites after resting.')],
      [T('القيام والتراويح', 'Qiyam and Taraweeh'), T('أيام للعبادة وقراءة القرآن في الحرم.', 'Days of worship and Quran recitation in the Haram.')],
      [T('الإفطار الجماعي', 'Group iftar'), T('إفطار جماعي مع المجموعة وحلقة تلاوة.', 'A group iftar and recitation circle.')],
      [T('العشر الأواخر', 'The last ten nights'), T('برنامج خاص مع تنظيم الدخول والخروج.', 'A dedicated program with managed entry and exit.')],
      [T('الانتقال إلى المدينة', 'Travel to Madinah'), T('الإقامة قرب المسجد النبوي.', 'Stay close to the Prophet’s Mosque.')],
      [T('الروضة الشريفة', 'The Noble Rawdah'), T('زيارة منظمة بحسب مواعيد التصاريح.', 'An organised visit according to permit times.')],
      [T('المغادرة', 'Departure'), T('العودة إلى بلدكم بسلامة الله.', 'Return home safely.')]] },
  { id: 'umrah-premium', cat: 'umrah', days: 7, price: 12500, kind: 'dome', c: ['#7a5a16', '#3a2a08'],
    name: T('العمرة المميزة', 'Premium Umrah'), tag: T('خدمة خاصة', 'Private service'),
    sum: T('سبعة أيام بإقامة فاخرة مطلة على الحرم ومرشد خاص.', 'Seven days in a luxury stay overlooking the Haram with a private guide.'),
    mk: T('٤ ليالٍ في مكة المكرمة', '4 nights in Makkah'), md: T('٢ ليلة في المدينة المنورة', '2 nights in Madinah'),
    inc: [T('تأشيرة العمرة', 'Umrah visa'), T('طيران درجة رجال الأعمال', 'Business-class flight'), T('فندق ٥ نجوم بإطلالة على الحرم', '5-star hotel with Haram view'), T('سيارة خاصة بسائق', 'Private car with driver'), T('مرشد ديني خاص', 'Private religious guide'), T('ثلاث وجبات يومياً', 'Three meals a day')],
    exc: [T('المصاريف الشخصية', 'Personal expenses')],
    plan: [[T('الوصول والاستقبال الخاص', 'Arrival and private reception'), T('استقبال في صالة كبار الزوار والانتقال بسيارة خاصة.', 'VIP lounge reception and private transfer.')],
      [T('العمرة مع المرشد', 'Umrah with your guide'), T('أداء المناسك بهدوء وبدون زحام قدر الإمكان.', 'Perform the rites calmly, avoiding crowds where possible.')],
      [T('أيام العبادة', 'Days of worship'), T('وقت مفتوح للحرم مع مواعيد مرنة.', 'Open time in the Haram with flexible schedules.')],
      [T('زيارات خاصة', 'Private visits'), T('جولة خاصة في معالم مكة.', 'A private tour of Makkah landmarks.')],
      [T('المدينة المنورة', 'Madinah'), T('إقامة فاخرة وزيارة الروضة.', 'Luxury stay and Rawdah visit.')],
      [T('زيارات المدينة', 'Madinah visits'), T('جولة خاصة في معالم المدينة.', 'A private tour of Madinah landmarks.')],
      [T('المغادرة', 'Departure'), T('نقل خاص إلى المطار.', 'Private airport transfer.')]] },
  { id: 'hajj-easy', cat: 'hajj', days: 15, price: 21000, kind: 'mina', c: ['#8a4a1a', '#3a1c08'],
    name: T('الحج الميسّر', 'Easy Hajj'), tag: T('الحج', 'Hajj'),
    sum: T('خمسة عشر يوماً مع خيام مكيفة في منى وتنظيم كامل للمشاعر.', 'Fifteen days with air-conditioned tents in Mina and fully organised rites.'),
    mk: T('٩ ليالٍ في مكة والمشاعر', '9 nights in Makkah and the holy sites'), md: T('٤ ليالٍ في المدينة', '4 nights in Madinah'),
    inc: [T('تأشيرة الحج والتصريح', 'Hajj visa and permit'), T('تذكرة الطيران', 'Return flight'), T('خيام مكيفة في منى', 'Air-conditioned tents in Mina'), T('نقل المشاعر', 'Transport between the holy sites'), T('مرشد شرعي ومشرف', 'Scholar guide and supervisor'), T('وجبات كاملة في المشاعر', 'Full meals in the holy sites')],
    exc: [T('الهدي (يُحجز اختيارياً)', 'Hady (optional booking)'), T('المصاريف الشخصية', 'Personal expenses')],
    plan: [[T('الوصول والتجهيز', 'Arrival and preparation'), T('الاستقبال وتسكين الفندق وجلسة تعريفية.', 'Reception, check-in and an orientation session.')],
      [T('الأيام قبل الحج', 'Days before Hajj'), T('عمرة التمتع والاستعداد للمناسك.', 'Tamattu Umrah and preparing for the rites.')],
      [T('يوم التروية', 'Day of Tarwiyah'), T('الانتقال إلى منى.', 'Move to Mina.')],
      [T('يوم عرفة', 'Day of Arafah'), T('الوقوف بعرفة ثم المبيت بمزدلفة.', 'Standing at Arafah, then the night at Muzdalifah.')],
      [T('أيام العيد والتشريق', 'Eid and Tashreeq days'), T('رمي الجمرات والذبح وطواف الإفاضة.', 'Stoning, sacrifice and tawaf al-ifadah.')],
      [T('المدينة المنورة', 'Madinah'), T('زيارة المسجد النبوي والروضة.', 'Visit the Prophet’s Mosque and Rawdah.')],
      [T('العودة', 'Return'), T('طواف الوداع والمغادرة.', 'Farewell tawaf and departure.')]] },
  { id: 'hajj-premium', cat: 'hajj', days: 20, price: 38000, kind: 'star', c: ['#4a1a4a', '#1c0a2a'],
    name: T('الحج المميز', 'Premium Hajj'), tag: T('الأرقى', 'Top tier'),
    sum: T('عشرون يوماً بإقامة مميزة قرب الجمرات وعدد محدود من الحجاج.', 'Twenty days in a premium stay near the Jamarat with limited group size.'),
    mk: T('١٢ ليلة في مكة والمشاعر', '12 nights in Makkah and the holy sites'), md: T('٦ ليالٍ في المدينة', '6 nights in Madinah'),
    inc: [T('تأشيرة الحج والتصريح', 'Hajj visa and permit'), T('طيران درجة رجال الأعمال', 'Business-class flight'), T('خيام مميزة في منى', 'Premium tents in Mina'), T('فنادق ٥ نجوم', '5-star hotels'), T('مجموعة لا تتجاوز ٢٥ حاجاً', 'Group of up to 25 pilgrims'), T('مرشد شرعي وطبيب مرافق', 'Scholar guide and accompanying doctor')],
    exc: [T('الهدي (يُحجز اختيارياً)', 'Hady (optional booking)'), T('المصاريف الشخصية', 'Personal expenses')],
    plan: [[T('الوصول والاستقبال', 'Arrival and reception'), T('استقبال خاص وتسكين في الفندق.', 'Private reception and hotel check-in.')],
      [T('عمرة التمتع', 'Tamattu Umrah'), T('أداء العمرة مع المرشد.', 'Perform Umrah with your guide.')],
      [T('منى وعرفة', 'Mina and Arafah'), T('مبيت منى والوقوف بعرفة بتنظيم مميز.', 'The night in Mina and standing at Arafah with premium arrangements.')],
      [T('مزدلفة ورمي الجمرات', 'Muzdalifah and stoning'), T('تنظيم أوقات الرمي لتجنب الزحام.', 'Managed stoning times to avoid crowds.')],
      [T('طواف الإفاضة', 'Tawaf al-ifadah'), T('بمرافقة المرشد.', 'With your guide.')],
      [T('المدينة المنورة', 'Madinah'), T('ستة أيام في رحاب المسجد النبوي.', 'Six days near the Prophet’s Mosque.')],
      [T('الوداع', 'Farewell'), T('الطواف والمغادرة.', 'Farewell tawaf and departure.')]] }
];
const hotels = [
  { id: 'h1', city: 'mk', st: 5, dist: 80, name: T('فندق الصفا الملكي', 'Al-Safa Royal Hotel'), kind: 'dome', c: ['#7a5a16', '#3a2a08'], d: T('غرف واسعة بإطلالة على الحرم ومصاعد مخصصة.', 'Spacious rooms with Haram view and dedicated lifts.') },
  { id: 'h2', city: 'mk', st: 4, dist: 250, name: T('فندق النور المكي', 'Al-Nour Makki Hotel'), kind: 'kaaba', c: ['#165a43', '#0b2e22'], d: T('خدمة ممتازة وأسعار معتدلة قريب من مواقف الحافلات.', 'Excellent service at moderate prices near the bus stops.') },
  { id: 'h3', city: 'mk', st: 3, dist: 600, name: T('فندق الواحة', 'Al-Waha Hotel'), kind: 'star', c: ['#2f8a68', '#0f3d2e'], d: T('خيار اقتصادي نظيف مع نقل مجاني إلى الحرم.', 'A clean economy choice with free shuttle to the Haram.') },
  { id: 'h4', city: 'md', st: 5, dist: 60, name: T('فندق طيبة الملكي', 'Taybah Royal Hotel'), kind: 'dome', c: ['#2c2a5a', '#0e1a3a'], d: T('قريب جداً من المسجد النبوي مع إفطار واسع.', 'Very close to the Prophet’s Mosque with a wide breakfast.') },
  { id: 'h5', city: 'md', st: 4, dist: 200, name: T('فندق الأنصار', 'Al-Ansar Hotel'), kind: 'moon', c: ['#8a4a1a', '#3a1c08'], d: T('غرف عائلية ومطعم يقدم وجبات متنوعة.', 'Family rooms and a restaurant with varied meals.') },
  { id: 'h6', city: 'md', st: 3, dist: 450, name: T('فندق الهجرة', 'Al-Hijrah Hotel'), kind: 'mina', c: ['#4a1a4a', '#1c0a2a'], d: T('إقامة بسيطة ومريحة للمجموعات.', 'Simple, comfortable stay for groups.') }
];
const faqs = [
  [T('هل يمكن إلغاء الحجز؟', 'Can I cancel a booking?'), T('نعم، وفق سياسة كل باقة. نوضح مواعيد الاسترداد في عقد الحجز قبل الدفع.', 'Yes, according to each package’s policy. Refund dates are stated in the booking contract before payment.')],
  [T('ما المستندات المطلوبة للتأشيرة؟', 'Which documents do I need for the visa?'), T('جواز سفر ساري ستة أشهر، وصورة شخصية حديثة، وشهادة التطعيم المطلوبة، وبيانات الحجز. التفاصيل في صفحة دليل التأشيرة.', 'A passport valid for six months, a recent photo, the required vaccination certificate and booking details. See the visa guide page.')],
  [T('هل يمكن السفر مع الأطفال وكبار السن؟', 'Can I travel with children and elderly relatives?'), T('بالتأكيد. نوفر غرفاً عائلية وكراسي متحركة عند الطلب ومرشداً يراعي وتيرة المجموعة.', 'Of course. We offer family rooms, wheelchairs on request and a guide who respects the group’s pace.')],
  [T('هل هناك رحلات للنساء بدون محرم؟', 'Are there trips for women without a mahram?'), T('تتبع الشروط الرسمية المعلنة من الجهات المختصة. نراجع حالة كل مسافرة قبل الحجز ونوضح المتطلبات.', 'Official conditions set by the authorities apply. We review each traveller’s case before booking and explain the requirements.')],
  [T('كيف أدفع؟', 'How do I pay?'), T('دفعة أولى عند تأكيد الحجز والباقي على أقساط قبل السفر. يُحدد فريقنا الخيارات المتاحة عند التواصل.', 'A first deposit when booking is confirmed and the rest in instalments before travel. Our team confirms the available options when you get in touch.')],
  [T('ماذا لو تأجلت الرحلة؟', 'What if the trip is postponed?'), T('نتواصل معك فوراً ونعرض بدائل في موعد قريب أو استرداداً كاملاً حسب سياسة الباقة.', 'We contact you immediately and offer an alternative date or a refund under the package policy.')]
];
const visa = [
  [T('جهّز مستنداتك', 'Prepare your documents'), T('جواز سفر ساري ستة أشهر على الأقل، وصورة شخصية بخلفية بيضاء، وصورة الهوية.', 'A passport valid for at least six months, a photo on a white background and your ID copy.')],
  [T('التطعيمات والتأمين', 'Vaccines and insurance'), T('راجع المطلوب من الجهات الصحية قبل السفر. نرسل لك قائمة محدثة عند الحجز.', 'Check the health requirements before travel. We send you an updated list when you book.')],
  [T('نقدّم الطلب عنك', 'We submit your application'), T('نرفع الطلب عبر القنوات الرسمية ونتابع حالته ونبلغك بأي ملاحظة.', 'We submit through official channels, follow its status and tell you about any note.')],
  [T('استلم تصريحك', 'Receive your permit'), T('نرسل التأشيرة والتصريح بنسخة رقمية قبل السفر بوقت كاف.', 'We send the visa and permit digitally well before travel.')],
  [T('اجتماع تعريفي', 'Orientation meeting'), T('نشرح المناسك والآداب والجدول ونجيب عن أسئلتك قبل الانطلاق.', 'We explain the rites, etiquette and schedule and answer your questions before departure.')]
];
const reviews = [
  [T('أبو يوسف', 'Abu Yousef'), T('تنظيم هادئ ومرشد صبور. كانت أول عمرة لوالدتي وكل شيء سار بيسر.', 'Calm organisation and a patient guide. It was my mother’s first Umrah and everything went smoothly.')],
  [T('أم سلمى', 'Umm Salma'), T('الفندق قريب والحافلات في مواعيدها. أحببت المحاضرة اليومية بعد العشاء.', 'The hotel was close and buses were on time. I loved the daily talk after Isha.')],
  [T('محمد العتيبي', 'Mohammed Al-Otaibi'), T('رافقنا مرشد شرعي طوال الحج وأجاب عن كل سؤال. أنصح بالباقة المميزة.', 'A scholar guide stayed with us all through Hajj and answered every question. I recommend the premium package.')]
];
const team = [
  [T('الشيخ أحمد الحربي', 'Sheikh Ahmed Al-Harbi'), T('المرشد الشرعي', 'Religious guide'), 'أ'],
  [T('سارة الغامدي', 'Sara Al-Ghamdi'), T('مديرة العمليات', 'Operations manager'), 'س'],
  [T('خالد المطيري', 'Khalid Al-Mutairi'), T('مسؤول المجموعات', 'Group coordinator'), 'خ'],
  [T('د. هدى الزهراني', 'Dr. Huda Al-Zahrani'), T('الطبيبة المرافقة', 'Travel doctor'), 'ه']
];
const guides = [
  { id: 'ihram', k: 'dome', c: ['#165a43', '#0b2e22'], t: T('ما تحتاجه قبل الإحرام', 'What you need before Ihram'),
    s: T('قائمة عملية للملابس والأدوات الخفيفة التي تسهّل رحلتك.', 'A practical list of clothes and light items that make your trip easier.'),
    b: T('خذ ثوبي إحرام إضافيين، وحذاءً مريحاً مناسباً للمشي الطويل، وحقيبة صغيرة للأوراق. اختر ملابس قطنية خفيفة لغير أيام الإحرام وجهّز مظلة صغيرة للشمس. تجنب العطور المعطرة في أيام الإحرام وخذ معك صابوناً وشامبو غير معطرين.', 'Bring two spare Ihram sets, comfortable shoes for long walks and a small bag for documents. Choose light cotton clothes for non-Ihram days and a small sun umbrella. Avoid scented products during Ihram and bring unscented soap and shampoo.') },
  { id: 'crowds', k: 'moon', c: ['#2c2a5a', '#0e1a3a'], t: T('أفضل أوقات الطواف تجنباً للزحام', 'Best times for tawaf to avoid crowds'),
    s: T('نصائح بسيطة لتنظيم وقتك بين الصلوات.', 'Simple tips to plan your time between prayers.'),
    b: T('تكون الساحات أهدأ عادة بعد الفجر مباشرة وفي ساعات الصباح الأولى. اشرب الماء كثيراً وخذ فترات راحة قصيرة وتجنب الذروة بعد الصلوات المفروضة. رافق مجموعتك واتفقوا على نقطة لقاء واضحة.', 'The courtyards are usually calmer just after Fajr and in the early morning. Drink plenty of water, take short breaks and avoid the peak after the obligatory prayers. Stay with your group and agree on a clear meeting point.') },
  { id: 'health', k: 'heart', c: ['#8a4a1a', '#3a1c08'], t: T('الصحة أثناء الرحلة', 'Staying healthy on the trip'),
    s: T('كيف تحافظ على طاقتك وتتجنب الإرهاق.', 'How to keep your energy up and avoid exhaustion.'),
    b: T('استشر طبيبك قبل السفر وخذ أدويتك بوصفاتها. استخدم كريماً واقياً من الشمس وارتدِ كمامة في الزحام إن شئت. نوم كافٍ وتغذية خفيفة يحميانك أكثر من أي دواء.', 'See your doctor before travel and carry your medicines with prescriptions. Use sunscreen and wear a mask in crowds if you wish. Enough sleep and light meals protect you better than any medicine.') }
];
guides[2].k = 'star';

/* ---------- layout ---------- */
const pages = []; // {ar:path,en:path}
const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');
const nav = [['', T('الرئيسية', 'Home')], ['packages', T('الباقات', 'Packages')], ['hotels', T('الفنادق', 'Hotels')], ['visa', T('دليل التأشيرة', 'Visa guide')], ['guides', T('إرشادات', 'Guides')], ['about', T('من نحن', 'About')], ['faq', T('الأسئلة', 'FAQ')], ['contact', T('تواصل', 'Contact')]];
const href = (lang, p) => (lang === 'ar' ? '/' : '/en/') + p + (p && !p.endsWith('/') ? '.html' : '');
const L = (o, lang) => o[lang];
const fmt = (n, lang) => n.toLocaleString(lang === 'ar' ? 'ar-EG' : 'en-US');
const num = (n, lang) => (lang === 'ar' ? String(n).replace(/\d/g, d => '٠١٢٣٤٥٦٧٨٩'[d]) : String(n));
const cur = T('ر.س', 'SAR');

function page(lang, p, title, desc, body, extra = '') {
  const other = lang === 'ar' ? 'en' : 'ar';
  const base = p;
  const dir = lang === 'ar' ? 'rtl' : 'ltr';
  const navH = nav.map(([k, n]) => `<a href="${href(lang, k)}"${k === p.split('/')[0] || (k === 'packages' && p.startsWith('package/')) ? ' aria-current="page"' : ''}>${L(n, lang)}</a>`).join('');
  const t = `${title} | ${L(SITE, lang)}`;
  return `<!doctype html>
<html lang="${lang}" dir="${dir}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(t)}</title>
<meta name="description" content="${esc(desc)}">
<meta name="robots" content="noindex,nofollow">
<meta name="theme-color" content="#0f3d2e">
<link rel="alternate" hreflang="${other}" href="${href(other, base)}">
<link rel="icon" href="/assets/favicon.svg" type="image/svg+xml">
<link rel="preload" href="/assets/fonts/cairo-${lang === 'ar' ? 'arabic' : 'latin'}.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="/assets/style.css">
<script>document.documentElement.classList.add('js')</script>
</head>
<body>
${star()}
<a class="skip" href="#main">${lang === 'ar' ? 'تخطَّ إلى المحتوى' : 'Skip to content'}</a>
<header class="hdr"><div class="wrap">
<a class="brand" href="${href(lang, '')}" aria-label="${L(SITE, lang)}">${logo}<span>${L(SITE, lang)}<small>${lang === 'ar' ? 'للحج والعمرة' : 'Hajj & Umrah'}</small></span></a>
<button class="burger" aria-label="${lang === 'ar' ? 'القائمة' : 'Menu'}" aria-expanded="false" aria-controls="nav"><span></span><span></span><span></span></button>
<nav class="nav" id="nav" aria-label="${lang === 'ar' ? 'القائمة الرئيسية' : 'Main'}">${navH}<a class="lang" href="${href(other, base)}" hreflang="${other}" lang="${other}">${other === 'en' ? 'English' : 'العربية'}</a></nav>
</div></header>
<main id="main">
${body}
</main>
<footer class="ftr"><div class="wrap">
<div class="fgrid">
<div><a class="brand" style="color:#fff" href="${href(lang, '')}">${logo}<span>${L(SITE, lang)}</span></a>
<p style="margin-top:12px">${lang === 'ar' ? 'نرافقك في رحلة الإيمان بتنظيم هادئ ومرشدين متخصصين.' : 'We accompany your journey of faith with calm organisation and specialist guides.'}</p></div>
<div><h4>${lang === 'ar' ? 'الباقات' : 'Packages'}</h4><ul>${packages.map(k => `<li><a href="${href(lang, 'package/' + k.id)}">${L(k.name, lang)}</a></li>`).join('')}</ul></div>
<div><h4>${lang === 'ar' ? 'الموقع' : 'Site'}</h4><ul>${nav.slice(2).map(([k, n]) => `<li><a href="${href(lang, k)}">${L(n, lang)}</a></li>`).join('')}</ul></div>
<div><h4>${lang === 'ar' ? 'تواصل' : 'Contact'}</h4><ul><li>${lang === 'ar' ? 'يومياً ٩ص - ١٠م' : 'Daily 9am - 10pm'}</li><li><a href="https://wa.me/${WA}" rel="noopener">${lang === 'ar' ? 'واتساب' : 'WhatsApp'}</a></li><li><a href="${href(lang, 'contact')}">${lang === 'ar' ? 'نموذج طلب حجز' : 'Booking request form'}</a></li></ul></div>
</div>
<p class="legal">${lang === 'ar' ? 'موقع تجريبي لعرض التصميم. الأسعار والأسماء والبيانات المعروضة تجريبية وليست عروضاً حقيقية.' : 'Demo site to showcase the design. Prices, names and data shown are samples, not real offers.'}</p>
</div></footer>
<a class="wa" href="https://wa.me/${WA}" rel="noopener" aria-label="WhatsApp">${lang === 'ar' ? 'واتساب' : 'WhatsApp'}</a>
<script src="/assets/app.js" defer></script>
${extra}
</body></html>`;
}
function write(lang, p, title, desc, body, extra) {
  const file = path.join(OUT, lang === 'ar' ? '' : 'en', p === '' ? 'index.html' : p + '.html');
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, page(lang, p, title, desc, body, extra));
}
const crumb = (lang, items) => `<div class="crumb"><a href="${href(lang, '')}">${lang === 'ar' ? 'الرئيسية' : 'Home'}</a> / ${items.map(i => i).join(' / ')}</div>`;
const phead = (lang, title, lead, crumbs) => `<section class="phead" style="padding-block:56px 48px">${pattern}<div class="wrap" style="position:relative">${crumb(lang, crumbs)}<h1>${title}</h1><p class="lead">${lead}</p></div></section>`;
const pkCard = (k, lang) => `<article class="card pk rv" data-cat="${k.cat}"><div class="art">${motif(k.kind, k.c[0], k.c[1])}<span class="tag">${L(k.tag, lang)}</span></div><div class="body"><h3>${L(k.name, lang)}</h3><p style="color:var(--mute)">${L(k.sum, lang)}</p><div class="meta"><span>${num(k.days, lang)} ${lang === 'ar' ? 'أيام' : 'days'}</span><span>${L(k.mk, lang)}</span></div><div class="foot"><div class="price">${fmt(k.price, lang)} <small>${L(cur, lang)} / ${lang === 'ar' ? 'للفرد' : 'person'}</small></div><a class="btn btn-dark" href="${href(lang, 'package/' + k.id)}">${lang === 'ar' ? 'التفاصيل' : 'Details'}</a></div></div></article>`;
const hotelCard = (h, lang) => `<article class="card hotel rv" data-city="${h.city}"><div class="art">${motif(h.kind, h.c[0], h.c[1])}</div><h3>${L(h.name, lang)}</h3><p class="stars" aria-label="${h.st} ${lang === 'ar' ? 'نجوم' : 'stars'}">${'★'.repeat(h.st)}</p><p style="color:var(--mute);margin:6px 0 12px">${L(h.d, lang)}</p><span class="dist">${lang === 'ar' ? 'يبعد' : ''} ${num(h.dist, lang)} ${lang === 'ar' ? 'متراً عن الحرم' : 'm from the Haram'}</span></article>`;

for (const lang of ['ar', 'en']) {
  const A = lang === 'ar';
  /* home */
  const feats = [['shield', T('تنظيم موثوق', 'Trusted organisation'), T('فريق ميداني معك في كل خطوة، من الاستقبال حتى العودة.', 'A field team with you at every step, from reception to return.')],
    ['hotel', T('إقامة قريبة', 'Nearby stays'), T('فنادق مختارة على مسافة قصيرة من الحرمين.', 'Hand-picked hotels a short walk from the two Holy Mosques.')],
    ['book', T('مرشدون متخصصون', 'Specialist guides'), T('علماء ومرشدون يشرحون المناسك بهدوء ويجيبون عن أسئلتك.', 'Scholars and guides explain the rites calmly and answer your questions.')],
    ['clock', T('جداول واضحة', 'Clear schedules'), T('برنامج يومي مكتوب ومواعيد حافلات ثابتة بدون مفاجآت.', 'A written daily program and fixed bus times, no surprises.')],
    ['users', T('مجموعات صغيرة', 'Small groups'), T('عدد محدود لراحة أكبر ومتابعة أدق.', 'Limited numbers for more comfort and closer care.')],
    ['heart', T('رعاية لكبار السن', 'Care for the elderly'), T('كراسي متحركة وغرف قريبة من المصاعد وفريق يساعد.', 'Wheelchairs, rooms near lifts and a team that helps.')]];
  const stats = [[12, T('عاماً من الخبرة', 'years of experience')], [18500, T('معتمراً وحاجاً', 'pilgrims served')], [96, T('% رضا العملاء', '% satisfaction')], [42, T('مرشداً ومشرفاً', 'guides and supervisors')]];
  const home = `
<section class="hero" style="padding-bottom:0">${pattern}<div class="wrap hero-grid"><div>
<span class="eyebrow">${A ? 'رحلة إيمانية بتنظيم هادئ' : 'A faith journey, calmly organised'}</span>
<h1 style="margin-top:12px">${A ? 'رحلتك إلى بيت الله تبدأ من هنا' : 'Your journey to the House of Allah starts here'}</h1>
<p class="lead">${A ? 'باقات حج وعمرة بإقامة قريبة من الحرمين ومرشدين متخصصين وبرنامج مكتوب بوضوح. اختر ما يناسبك ونحن نتولى الباقي.' : 'Hajj and Umrah packages with stays close to the two Holy Mosques, specialist guides and a clearly written program. Choose what suits you and we handle the rest.'}</p>
<div class="cta-row"><a class="btn btn-gold" href="${href(lang, 'packages')}">${A ? 'تصفح الباقات' : 'Browse packages'}</a><a class="btn btn-line" href="${href(lang, 'contact')}">${A ? 'اطلب استشارة' : 'Request advice'}</a></div>
<div class="trust"><span><b>${num(12, lang)}+</b>${A ? 'عاماً خبرة' : 'years'}</span><span><b>${num(5, lang)}</b>${A ? 'باقات' : 'packages'}</span><span><b>${num(24, lang)}/${num(7, lang)}</b>${A ? 'دعم ميداني' : 'field support'}</span></div>
</div>${heroArt}</div>${skyline}</section>

<section><div class="wrap"><div class="sec-head"><span class="eyebrow">${A ? 'لماذا نحن' : 'Why us'}</span><h2>${A ? 'نهتم بالتفاصيل لتتفرغ للعبادة' : 'We handle the details so you can focus on worship'}</h2></div>
<div class="grid g3">${feats.map(f => `<div class="card feat rv">${ic(f[0])}<h3>${L(f[1], lang)}</h3><p>${L(f[2], lang)}</p></div>`).join('')}</div></div></section>

<section class="alt"><div class="wrap"><div class="sec-head"><span class="eyebrow">${A ? 'الباقات' : 'Packages'}</span><h2>${A ? 'اختر باقتك' : 'Choose your package'}</h2><p class="lead">${A ? 'خمس باقات للحج والعمرة. كل باقة لها برنامج يومي وتفاصيل واضحة لما يشمله السعر.' : 'Five Hajj and Umrah packages. Each has a daily program and clear details of what the price includes.'}</p></div>
<div class="grid g3">${packages.slice(0, 3).map(k => pkCard(k, lang)).join('')}</div>
<p style="text-align:center;margin-top:32px"><a class="btn btn-dark" href="${href(lang, 'packages')}">${A ? 'كل الباقات' : 'All packages'}</a></p></div></section>

<section class="stats"><div class="wrap grid g4">${stats.map(s => `<div><b data-count="${s[0]}">${num(fmt(s[0], lang).replace(/[,٬]/g, ''), lang) === '' ? '' : fmt(s[0], lang)}</b><span>${L(s[1], lang)}</span></div>`).join('')}</div></section>

<section><div class="wrap"><div class="sec-head"><span class="eyebrow">${A ? 'خطوات بسيطة' : 'Simple steps'}</span><h2>${A ? 'كيف تحجز معنا' : 'How booking works'}</h2></div>
<div class="grid g2"><div class="steps">${[[T('اختر الباقة', 'Choose a package'), T('قارن الأسعار والبرامج واختر الأنسب لعائلتك.', 'Compare prices and programs and pick the best fit for your family.')], [T('أرسل طلبك', 'Send your request'), T('عبّئ النموذج وسنتصل بك لتأكيد التفاصيل.', 'Fill in the form and we will call you to confirm details.')], [T('نجهّز التأشيرة', 'We prepare the visa'), T('نتولى الأوراق والمتابعة حتى استلام التصريح.', 'We handle paperwork and follow-up until the permit arrives.')], [T('سافر مطمئناً', 'Travel with peace of mind'), T('فريقنا معك في كل مرحلة حتى العودة.', 'Our team is with you at every stage until you return.')]].map(s => `<div class="step rv"><div><h3>${L(s[0], lang)}</h3><p>${L(s[1], lang)}</p></div></div>`).join('')}</div>
<div class="card rv" style="align-self:start"><h3>${A ? 'جدول تقريبي لعمرة ٨ أيام' : 'Sample 8-day Umrah schedule'}</h3><div class="days" style="margin-top:18px">${packages[0].plan.slice(0, 5).map((d, i) => `<div class="day"><b>${A ? 'اليوم' : 'Day'} ${num(i + 1, lang)} · ${L(d[0], lang)}</b><p>${L(d[1], lang)}</p></div>`).join('')}</div><a class="more" style="color:var(--g7);font-weight:700" href="${href(lang, 'package/umrah-economy')}">${A ? 'البرنامج كاملاً ←' : 'Full program →'}</a></div></div></div></section>

<section class="alt"><div class="wrap"><div class="sec-head"><span class="eyebrow">${A ? 'آراء المعتمرين' : 'Pilgrim reviews'}</span><h2>${A ? 'ماذا قالوا عن رحلتهم' : 'What they said about their trip'}</h2></div>
<div class="grid g3">${reviews.map(r => `<figure class="card quote rv"><blockquote>${L(r[1], lang)}</blockquote><figcaption class="who"><span class="av">${L(r[0], lang).charAt(0)}</span><div><b>${L(r[0], lang)}</b><small>${A ? 'تقييم تجريبي' : 'Sample review'}</small></div></figcaption></figure>`).join('')}</div></div></section>

<section><div class="wrap"><div class="sec-head"><span class="eyebrow">${A ? 'فريقنا' : 'Our team'}</span><h2>${A ? 'أشخاص تثق بهم في الرحلة' : 'People you can trust on the trip'}</h2></div>
<div class="grid g4 team">${team.map(m => `<div class="card rv" style="text-align:center"><span class="av" style="margin-inline:auto">${A ? m[2] : L(m[0], 'en').replace(/^(Sheikh|Dr\.) /, '').charAt(0)}</span><h3>${L(m[0], lang)}</h3><p style="color:var(--mute)">${L(m[1], lang)}</p></div>`).join('')}</div></div></section>

<section class="alt"><div class="wrap"><div class="sec-head"><span class="eyebrow">${A ? 'إرشادات' : 'Guides'}</span><h2>${A ? 'قبل أن تسافر' : 'Before you travel'}</h2></div>
<div class="grid g3">${guides.map(g => `<article class="card post rv"><div class="art">${motif(g.k, g.c[0], g.c[1])}</div><h3>${L(g.t, lang)}</h3><p style="color:var(--mute);margin:8px 0 12px">${L(g.s, lang)}</p><a class="more" href="${href(lang, 'guides')}#${g.id}">${A ? 'اقرأ المزيد' : 'Read more'}</a></article>`).join('')}</div></div></section>

<section><div class="wrap"><div class="band"><div><h2>${A ? 'جاهز لتحديد موعد رحلتك؟' : 'Ready to set your trip date?'}</h2><p>${A ? 'أرسل طلبك وسيتصل بك مستشار خلال يوم عمل واحد.' : 'Send your request and an adviser will call you within one business day.'}</p></div><a class="btn btn-gold" href="${href(lang, 'contact')}">${A ? 'اطلب حجزك' : 'Request a booking'}</a></div></div></section>`;
  write(lang, '', A ? 'رحلات الحج والعمرة' : 'Hajj and Umrah trips', A ? 'باقات حج وعمرة بإقامة قريبة من الحرمين ومرشدين متخصصين وبرنامج يومي واضح.' : 'Hajj and Umrah packages with stays near the two Holy Mosques, specialist guides and a clear daily program.', home);

  /* packages */
  write(lang, 'packages', A ? 'الباقات' : 'Packages', A ? 'قارن باقات الحج والعمرة حسب المدة والسعر.' : 'Compare Hajj and Umrah packages by length and price.',
    phead(lang, A ? 'باقات الحج والعمرة' : 'Hajj and Umrah packages', A ? 'اختر الباقة التي تناسب وقتك وميزانيتك.' : 'Choose the package that fits your time and budget.', [A ? 'الباقات' : 'Packages']) +
    `<section><div class="wrap"><div class="filters" role="group" aria-label="${A ? 'تصفية' : 'Filter'}"><button class="chip" aria-pressed="true" data-f="all">${A ? 'الكل' : 'All'}</button><button class="chip" aria-pressed="false" data-f="umrah">${A ? 'العمرة' : 'Umrah'}</button><button class="chip" aria-pressed="false" data-f="hajj">${A ? 'الحج' : 'Hajj'}</button></div>
<div class="grid g3" id="pk">${packages.map(k => pkCard(k, lang)).join('')}</div><p class="empty" id="empty">${A ? 'لا توجد باقات.' : 'No packages.'}</p>
<p class="note" style="margin-top:30px">${A ? 'الأسعار تجريبية للعرض فقط وتختلف بحسب الموسم وعدد المسافرين.' : 'Prices are samples for display only and vary by season and number of travellers.'}</p></div></section>`);

  /* package detail */
  for (const k of packages) {
    const rel = packages.filter(o => o.id !== k.id).slice(0, 3);
    write(lang, 'package/' + k.id, L(k.name, lang), L(k.sum, lang),
      `<section class="phead">${pattern}<div class="wrap" style="position:relative">${crumb(lang, [`<a href="${href(lang, 'packages')}">${A ? 'الباقات' : 'Packages'}</a>`, L(k.name, lang)])}<h1>${L(k.name, lang)}</h1><p class="lead">${L(k.sum, lang)}</p><div class="meta" style="color:#cfe3d8;margin-top:14px"><span>${num(k.days, lang)} ${A ? 'أيام' : 'days'}</span><span>${L(k.mk, lang)}</span><span>${L(k.md, lang)}</span></div></div></section>
<section><div class="wrap detail"><div>
<h2 style="margin-bottom:20px">${A ? 'البرنامج اليومي' : 'Daily program'}</h2><div class="days">${k.plan.map((d, i) => `<div class="day"><b>${A ? 'اليوم' : 'Day'} ${num(i + 1, lang)} · ${L(d[0], lang)}</b><p>${L(d[1], lang)}</p></div>`).join('')}</div>
<div class="grid g2" style="margin-top:20px"><div class="card"><h3 style="margin-bottom:14px">${A ? 'يشمل السعر' : 'Included'}</h3><ul class="list">${k.inc.map(i => `<li>${L(i, lang)}</li>`).join('')}</ul></div><div class="card"><h3 style="margin-bottom:14px">${A ? 'لا يشمل' : 'Not included'}</h3><ul class="list no">${k.exc.map(i => `<li>${L(i, lang)}</li>`).join('')}</ul></div></div>
<h2 style="margin:40px 0 18px">${A ? 'الأسعار حسب الغرفة' : 'Prices by room'}</h2><div class="tw"><table><thead><tr><th>${A ? 'نوع الغرفة' : 'Room type'}</th><th>${A ? 'السعر للفرد' : 'Per person'}</th></tr></thead><tbody>
<tr><td>${A ? 'رباعية' : 'Quad'}</td><td>${fmt(k.price, lang)} ${L(cur, lang)}</td></tr><tr><td>${A ? 'ثلاثية' : 'Triple'}</td><td>${fmt(Math.round(k.price * 1.12), lang)} ${L(cur, lang)}</td></tr><tr><td>${A ? 'ثنائية' : 'Double'}</td><td>${fmt(Math.round(k.price * 1.28), lang)} ${L(cur, lang)}</td></tr><tr><td>${A ? 'فردية' : 'Single'}</td><td>${fmt(Math.round(k.price * 1.6), lang)} ${L(cur, lang)}</td></tr></tbody></table></div>
<p class="note" style="margin-top:16px">${A ? 'أسعار تجريبية للعرض.' : 'Sample prices for display.'}</p></div>
<aside class="side card"><div class="art" style="border-radius:12px;overflow:hidden;margin-bottom:16px">${motif(k.kind, k.c[0], k.c[1])}</div><div class="price">${fmt(k.price, lang)} <small>${L(cur, lang)} / ${A ? 'للفرد' : 'person'}</small></div><p style="color:var(--mute);margin:8px 0 18px">${A ? 'يبدأ من، غرفة رباعية.' : 'From, quad room.'}</p><a class="btn btn-gold" style="width:100%;justify-content:center" href="${href(lang, 'contact')}?package=${k.id}">${A ? 'اطلب هذه الباقة' : 'Request this package'}</a><a class="btn btn-line dk" style="width:100%;justify-content:center;margin-top:10px" href="https://wa.me/${WA}" rel="noopener">${A ? 'اسأل على واتساب' : 'Ask on WhatsApp'}</a></aside></div></section>
<section class="alt"><div class="wrap"><div class="sec-head"><h2>${A ? 'باقات أخرى' : 'Other packages'}</h2></div><div class="grid g3">${rel.map(o => pkCard(o, lang)).join('')}</div></div></section>`);
  }

  /* hotels */
  write(lang, 'hotels', A ? 'الفنادق' : 'Hotels', A ? 'فنادق مختارة قرب الحرمين بمستويات مختلفة.' : 'Selected hotels near the two Holy Mosques at different levels.',
    phead(lang, A ? 'فنادق قريبة من الحرمين' : 'Hotels near the Holy Mosques', A ? 'نختار فنادقنا بحسب القرب والنظافة وجودة الخدمة.' : 'We choose hotels for proximity, cleanliness and service quality.', [A ? 'الفنادق' : 'Hotels']) +
    `<section><div class="wrap"><div class="filters" role="group"><button class="chip" aria-pressed="true" data-h="all">${A ? 'الكل' : 'All'}</button><button class="chip" aria-pressed="false" data-h="mk">${A ? 'مكة المكرمة' : 'Makkah'}</button><button class="chip" aria-pressed="false" data-h="md">${A ? 'المدينة المنورة' : 'Madinah'}</button></div><div class="grid g3" id="hl">${hotels.map(h => hotelCard(h, lang)).join('')}</div><p class="note" style="margin-top:30px">${A ? 'أسماء الفنادق تجريبية.' : 'Hotel names are samples.'}</p></div></section>`);

  /* visa */
  write(lang, 'visa', A ? 'دليل التأشيرة' : 'Visa guide', A ? 'خطوات استخراج تأشيرة الحج والعمرة ومتطلباتها.' : 'Steps and requirements for the Hajj and Umrah visa.',
    phead(lang, A ? 'دليل التأشيرة والتصريح' : 'Visa and permit guide', A ? 'نشرح الخطوات ببساطة ونتابع الطلب عنك.' : 'We explain the steps simply and follow your application for you.', [A ? 'دليل التأشيرة' : 'Visa guide']) +
    `<section><div class="wrap"><div class="grid g2"><div class="steps">${visa.map(s => `<div class="step rv"><div><h3>${L(s[0], lang)}</h3><p>${L(s[1], lang)}</p></div></div>`).join('')}</div><div class="card" style="align-self:start"><h3 style="margin-bottom:14px">${A ? 'قائمة المستندات' : 'Document checklist'}</h3><ul class="list">${[T('جواز سفر ساري ستة أشهر', 'Passport valid six months'), T('صورة شخصية بخلفية بيضاء', 'Photo on a white background'), T('صورة الهوية الوطنية', 'National ID copy'), T('شهادة التطعيم المطلوبة', 'Required vaccination certificate'), T('بيانات الحجز', 'Booking details')].map(i => `<li>${L(i, lang)}</li>`).join('')}</ul><p class="note" style="margin-top:18px">${A ? 'تتغير الاشتراطات الرسمية. نراجع المطلوب معك عند الحجز.' : 'Official requirements change. We review what is required with you when you book.'}</p></div></div></div></section>`);

  /* guides */
  write(lang, 'guides', A ? 'إرشادات' : 'Guides', A ? 'نصائح عملية قبل الرحلة وأثناءها.' : 'Practical tips for before and during your trip.',
    phead(lang, A ? 'إرشادات للمعتمر والحاج' : 'Guides for pilgrims', A ? 'مقالات قصيرة تساعدك على الاستعداد.' : 'Short articles to help you prepare.', [A ? 'إرشادات' : 'Guides']) +
    `<section><div class="wrap" style="max-width:820px">${guides.map(g => `<article id="${g.id}" class="card post" style="margin-bottom:26px"><div class="art">${motif(g.k, g.c[0], g.c[1])}</div><h2 style="font-size:1.6rem">${L(g.t, lang)}</h2><p style="margin-top:10px;color:var(--mute)">${L(g.b, lang)}</p></article>`).join('')}</div></section>`);

  /* about */
  write(lang, 'about', A ? 'من نحن' : 'About', A ? 'تعرف على فريق سكينة ورؤيته.' : 'Meet the Sakina team and its vision.',
    phead(lang, A ? 'من نحن' : 'About us', A ? 'نؤمن أن الرحلة الإيمانية تستحق هدوءاً وتنظيماً.' : 'We believe a journey of faith deserves calm and good organisation.', [A ? 'من نحن' : 'About']) +
    `<section><div class="wrap"><div class="grid g2"><div><h2>${A ? 'قصتنا' : 'Our story'}</h2><p class="lead" style="margin-top:14px">${A ? 'بدأنا بمجموعة صغيرة من المعتمرين بقيادة مرشد واحد، ثم كبرنا بثقة من رافقناهم. لا نزال نؤمن بالمجموعات الصغيرة والمتابعة الشخصية.' : 'We started with one small group of pilgrims and a single guide, and grew on the trust of those we accompanied. We still believe in small groups and personal follow-up.'}</p></div><div class="card"><h3 style="margin-bottom:12px">${A ? 'قيمنا' : 'Our values'}</h3><ul class="list">${[T('الصدق في الأسعار والوعود', 'Honesty in prices and promises'), T('الرفق بكبار السن والعائلات', 'Gentleness with the elderly and families'), T('الالتزام بالمواعيد', 'Keeping to schedules'), T('العلم الشرعي الصحيح', 'Sound religious knowledge')].map(i => `<li>${L(i, lang)}</li>`).join('')}</ul></div></div></div></section>
<section class="alt"><div class="wrap"><div class="sec-head"><h2>${A ? 'الفريق' : 'The team'}</h2></div><div class="grid g4 team">${team.map(m => `<div class="card" style="text-align:center"><span class="av" style="margin-inline:auto">${A ? m[2] : L(m[0], 'en').replace(/^(Sheikh|Dr\.) /, '').charAt(0)}</span><h3>${L(m[0], lang)}</h3><p style="color:var(--mute)">${L(m[1], lang)}</p></div>`).join('')}</div></div></section>`);

  /* faq */
  write(lang, 'faq', A ? 'الأسئلة الشائعة' : 'FAQ', A ? 'إجابات عن أكثر الأسئلة شيوعاً.' : 'Answers to the most common questions.',
    phead(lang, A ? 'الأسئلة الشائعة' : 'Frequently asked questions', A ? 'لم تجد إجابتك؟ تواصل معنا.' : 'Cannot find your answer? Contact us.', [A ? 'الأسئلة' : 'FAQ']) +
    `<section><div class="wrap" style="max-width:820px">${faqs.map(f => `<details><summary>${L(f[0], lang)}</summary><p>${L(f[1], lang)}</p></details>`).join('')}</div></section>`);

  /* contact */
  const lab = { name: A ? 'الاسم الكامل' : 'Full name', phone: A ? 'رقم الجوال' : 'Mobile number', email: A ? 'البريد الإلكتروني (اختياري)' : 'Email (optional)', pkg: A ? 'الباقة' : 'Package', n: A ? 'عدد المسافرين' : 'Travellers', date: A ? 'الشهر المفضل للسفر' : 'Preferred travel month', msg: A ? 'ملاحظات' : 'Notes' };
  write(lang, 'contact', A ? 'تواصل معنا' : 'Contact', A ? 'أرسل طلب حجز أو استشارة.' : 'Send a booking or advice request.',
    phead(lang, A ? 'اطلب حجزك' : 'Request your booking', A ? 'سنتصل بك خلال يوم عمل لتأكيد التفاصيل.' : 'We will call you within a business day to confirm details.', [A ? 'تواصل' : 'Contact']) +
    `<section><div class="wrap"><div class="grid g2"><div class="card"><form id="bk" novalidate data-lang="${lang}">
<div class="row2"><label>${lab.name}<input name="name" required autocomplete="name"><span class="err" data-for="name"></span></label><label>${lab.phone}<input name="phone" type="tel" inputmode="tel" required autocomplete="tel"><span class="err" data-for="phone"></span></label></div>
<label>${lab.email}<input name="email" type="email" autocomplete="email"><span class="err" data-for="email"></span></label>
<div class="row2"><label>${lab.pkg}<select name="pkg" required><option value="">${A ? 'اختر' : 'Select'}</option>${packages.map(k => `<option value="${k.id}">${L(k.name, lang)}</option>`).join('')}</select><span class="err" data-for="pkg"></span></label><label>${lab.n}<input name="n" type="number" min="1" max="50" value="2" required><span class="err" data-for="n"></span></label></div>
<label>${lab.date}<input name="date" type="month"></label>
<label>${lab.msg}<textarea name="msg" rows="4"></textarea></label>
<button class="btn btn-gold" type="submit" style="justify-self:start">${A ? 'إرسال الطلب' : 'Send request'}</button></form>
<div class="ok" id="ok" role="status" aria-live="polite"><b>${A ? 'تم استلام طلبك' : 'Request received'}</b><p>${A ? 'رقم الطلب' : 'Reference'}: <span id="ref"></span></p><p>${A ? 'هذا موقع تجريبي: يُحفظ الطلب في متصفحك فقط ولا يُرسل إلى أحد.' : 'This is a demo site: the request is saved in your browser only and is not sent to anyone.'}</p></div></div>
<div><div class="card"><h3 style="margin-bottom:12px">${A ? 'طرق أخرى للتواصل' : 'Other ways to reach us'}</h3><ul class="list"><li>${A ? 'واتساب' : 'WhatsApp'}: <a href="https://wa.me/${WA}" rel="noopener" style="color:var(--g7);font-weight:700">${A ? 'ابدأ محادثة' : 'Start a chat'}</a></li><li>${A ? 'ساعات العمل: يومياً ٩ص إلى ١٠م' : 'Hours: daily 9am to 10pm'}</li><li>${A ? 'الرد خلال يوم عمل' : 'Reply within one business day'}</li></ul><p class="note" style="margin-top:16px">${A ? 'رقم الواتساب المعروض تجريبي.' : 'The WhatsApp number shown is a placeholder.'}</p></div></div></div></div></section>`,
    `<script>window.__msg=${JSON.stringify({ req: A ? 'هذا الحقل مطلوب' : 'This field is required', phone: A ? 'أدخل رقم جوال صحيحاً' : 'Enter a valid mobile number', email: A ? 'أدخل بريداً صحيحاً' : 'Enter a valid email', n: A ? 'العدد من ١ إلى ٥٠' : 'Number must be 1 to 50' })}</script>`);
}

/* misc */
fs.writeFileSync(path.join(OUT, 'assets/favicon.svg'), logo.replace('<svg ', '<svg xmlns="http://www.w3.org/2000/svg" '));
fs.writeFileSync(path.join(OUT, 'robots.txt'), 'User-agent: *\nDisallow: /\n');
fs.writeFileSync(path.join(OUT, 'vercel.json'), JSON.stringify({ headers: [{ source: '/(.*)', headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }] }], cleanUrls: false }, null, 1));
fs.writeFileSync(path.join(OUT, '404.html'), page('ar', '404', 'الصفحة غير موجودة', '', '<section><div class="wrap" style="text-align:center"><h1>٤٠٤</h1><p class="lead" style="margin:12px auto 24px">الصفحة غير موجودة.</p><a class="btn btn-dark" href="/">الرئيسية</a></div></section>'));
console.log('built', fs.readdirSync(OUT));
