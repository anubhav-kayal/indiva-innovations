import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

const translations = {
  en: {
    nav: { product: 'Product', specifications: 'Specifications', manufacturing: 'Manufacturing', call: 'Call Now' },
    hero: {
      badge: 'Low Power • Generator Friendly',
      title1: 'Industrial Cooling for ',
      title2: "India's Events.",
      desc: 'Heavy-duty. Commercial grade. Built to beat the intense heat of open lawns, banquets, and large gatherings across the nation.',
      cta: 'View Specs',
      delivery: 'Pan-India Delivery',
      stats1: 'Units Sold',
      stats2: 'Cities Served',
      stats3: 'Years Experience',
    },
    spotlight: {
      title: 'The ',
      brand: 'Storm 5000',
      subtitle: 'Uncompromising power for the toughest climates.',
      card1title: 'Industrial Build Quality',
      card1desc: 'Designed for relentless 24/7 operation.',
      card2title: '100+ Feet Air Throw',
      card2desc: 'A massive 900 RPM motor ensures high-velocity cool air reaches the very back of the venue.',
      card3title: 'High-Density Honeycomb',
      card3desc: 'Thick cooling pads maximize water retention for rapid temperature drops in dry heat.',
    },
    applications: {
      title1: 'One Machine. ',
      title2: 'Multiple Uses.',
      subtitle: 'Engineered to adapt to any large-scale environment.',
      item1title: 'Marriage Lawns',
      item1desc: 'Keep massive outdoor crowds comfortable in peak summer.',
      item2title: 'Banquet Halls',
      item2desc: 'Rapid, high-volume cooling for large indoor spaces.',
      item3title: 'Religious Gatherings',
      item3desc: 'Silent operation combined with maximum airflow.',
    },
    specs: {
      title: 'Technical Specifications',
      subtitle: 'Everything you need to know for your commercial setup.',
      motor: 'Motor Speed & Power',
      motorVal: '900 RPM | 550 Watts',
      pump: 'Water Pump',
      pumpVal: '40 Watt (Uniflow Brand)',
      tank: 'Tank Capacity',
      tankVal: '100 Litre / 150 Litre / 200 Litre',
      cooling: 'Cooling Media',
      coolingVal: 'High-Density Honeycomb Pads',
      pricing: 'Pricing',
      pricingVal: 'Call for Bulk/B2B Pricing',
    },
    factory: {
      title1: 'Crafted in Varanasi.',
      title2: ' Delivered Across India.',
      desc: 'Stop relying on unbranded imports with zero after-sales support. We manufacture high-grade cooling units in our Varanasi facility, ensuring strict quality control and pan-India serviceability.',
      feature1: 'Nationwide shipping for bulk commercial orders.',
      feature2: 'Direct manufacturer pricing—no middleman margins.',
      feature3: 'Easily accessible spare parts anywhere in India.',
      feature4: 'Customizable tank capacities (100L to 200L).',
      mapTitle: 'Varanasi Production Hub',
      mapDesc: 'Supplying premium cooling solutions to major events across the country.',
    },
    faq: {
      title: 'Common Questions',
      subtitle: 'Everything you need to know about bulk orders and operations.',
      q1: 'Can it run on a portable generator?',
      a1: 'Absolutely. With a highly efficient 550 Watt motor, the Indiva Storm 5000 is designed to run smoothly on standard venue generators without causing power trips.',
      q2: 'How do you handle out-of-state shipping?',
      a2: 'We use trusted freight partners for pan-India delivery. The coolers are securely packaged to prevent transit damage, and bulk orders receive subsidized shipping rates.',
      q3: 'Are spare parts easily available locally?',
      a3: 'Yes. Unlike imported units, we use industry-standard, high-grade components (like Uniflow pumps) that are easily replaceable and available in any major electrical market in India.',
      q4: 'What is the warranty period?',
      a4: 'We offer a comprehensive 1-year warranty on all our cooling units, covering manufacturing defects and motor failures.',
      q5: 'Do you offer customized solutions?',
      a5: 'Yes! We provide custom tank capacities (100L to 200L) and can tailor the cooling unit to your specific venue requirements.',
    },
    footer: {
      heading: 'Equip your next major event.',
      desc: 'Contact us today to discuss bulk orders, pan-India logistics, and dealership inquiries for the upcoming season.',
      email: 'Email Sales Team',
      copyright: 'Indiva Innovations. All rights reserved.',
      made: 'Made with',
      inCity: 'in Varanasi, India.',
    },
    contact: {
      title: 'Get In Touch',
      desc: 'Have a question or ready to place an order? Fill out the form below and our team will get back to you within 24 hours.',
      name: 'Your Name',
      email: 'Email Address',
      phone: 'Phone Number',
      message: 'Your Message',
      submit: 'Send Message',
      success: 'Thank you! We will contact you shortly.',
      close: 'Close',
    },
    gallery: { title: 'Product Gallery', subtitle: 'See the Storm 5000 in action.' },
    testimonials: { title: 'What Our Clients Say', subtitle: 'Trusted by event organizers across India.' },
    statsTitle: 'Indiva Innovations in Numbers',
    backToTop: 'Back to top',
    languageToggle: 'हिन्दी',
  },
  hi: {
    nav: { product: 'उत्पाद', specifications: 'विशिष्टताएँ', manufacturing: 'निर्माण', call: 'कॉल करें' },
    hero: {
      badge: 'कम बिजली • जनरेटर फ्रेंडली',
      title1: 'भारत के आयोजनों के लिए ',
      title2: 'औद्योगिक कूलिंग।',
      desc: 'हैवी-ड्यूटी। कमर्शियल ग्रेड। देश भर में खुले लॉन, बैंक्वेट और बड़े समारोहों की भीषण गर्मी से निपटने के लिए बनाया गया।',
      cta: 'विशिष्टताएँ देखें',
      delivery: 'पूरे भारत में डिलीवरी',
      stats1: 'यूनिट बिकीं',
      stats2: 'शहरों में सेवा',
      stats3: 'वर्षों का अनुभव',
    },
    spotlight: {
      title: '',
      brand: 'स्टॉर्म 5000',
      subtitle: 'सबसे कठिन जलवायु के लिए अटूट शक्ति।',
      card1title: 'औद्योगिक निर्माण गुणवत्ता',
      card1desc: '24/7 संचालन के लिए डिज़ाइन किया गया।',
      card2title: '100+ फीट एयर थ्रो',
      card2desc: '900 RPM मोटर तेज हवा को स्थल के अंत तक पहुँचाती है।',
      card3title: 'हाई-डेंसिटी हनीकॉम्ब',
      card3desc: 'मोटी कूलिंग पैड सूखी गर्मी में तेजी से तापमान कम करते हैं।',
    },
    applications: {
      title1: 'एक मशीन। ',
      title2: 'अनेक उपयोग।',
      subtitle: 'किसी भी बड़े वातावरण के लिए अनुकूलित।',
      item1title: 'शादी के लॉन',
      item1desc: 'गर्मी में बड़ी भीड़ को आरामदायक रखें।',
      item2title: 'बैंक्वेट हॉल',
      item2desc: 'बड़े इनडोर स्थानों के लिए तेज़ कूलिंग।',
      item3title: 'धार्मिक समारोह',
      item3desc: 'शांत संचालन और अधिकतम वायु प्रवाह।',
    },
    specs: {
      title: 'तकनीकी विशिष्टताएँ',
      subtitle: 'आपके कमर्शियल सेटअप के लिए सब कुछ।',
      motor: 'मोटर स्पीड और पावर',
      motorVal: '900 RPM | 550 वॉट',
      pump: 'वॉटर पंप',
      pumpVal: '40 वॉट (यूनिफ्लो ब्रांड)',
      tank: 'टैंक क्षमता',
      tankVal: '100 लीटर / 150 लीटर / 200 लीटर',
      cooling: 'कूलिंग मीडिया',
      coolingVal: 'हाई-डेंसिटी हनीकॉम्ब पैड',
      pricing: 'मूल्य निर्धारण',
      pricingVal: 'थोक मूल्य के लिए कॉल करें',
    },
    factory: {
      title1: 'वाराणसी में निर्मित।',
      title2: 'पूरे भारत में डिलीवरी।',
      desc: 'बिना सर्विस वाले आयातित उत्पादों पर निर्भर रहना छोड़ें। हम अपनी वाराणसी सुविधा में उच्च ग्रेड कूलिंग यूनिट बनाते हैं।',
      feature1: 'बल्क ऑर्डर के लिए देशव्यापी शिपिंग।',
      feature2: 'सीधे निर्माता मूल्य—बिना बिचौलिए के।',
      feature3: 'भारत में कहीं भी आसानी से उपलब्ध स्पेयर पार्ट्स।',
      feature4: 'कस्टमाइज़ेबल टैंक क्षमता (100L से 200L)।',
      mapTitle: 'वाराणसी प्रोडक्शन हब',
      mapDesc: 'देश भर के प्रमुख आयोजनों के लिए प्रीमियम कूलिंग सॉल्यूशंस।',
    },
    faq: {
      title: 'सामान्य प्रश्न',
      subtitle: 'बल्क ऑर्डर और संचालन के बारे में सब कुछ।',
      q1: 'क्या यह पोर्टेबल जनरेटर पर चल सकता है?',
      a1: 'बिल्कुल। 550 वॉट की कुशल मोटर के साथ, इंडिवा स्टॉर्म 5000 मानक जनरेटर पर बिना ट्रिप किए चलने के लिए डिज़ाइन किया गया है।',
      q2: 'आप राज्यों के बाहर शिपिंग कैसे करते हैं?',
      a2: 'हम पूरे भारत में डिलीवरी के लिए विश्वसनीय फ्रेट पार्टनर्स का उपयोग करते हैं। कूलर सुरक्षित रूप से पैक किए जाते हैं।',
      q3: 'क्या स्पेयर पार्ट्स आसानी से उपलब्ध हैं?',
      a3: 'हाँ। आयातित यूनिटों के विपरीत, हम उद्योग-मानक घटकों का उपयोग करते हैं जो भारत के किसी भी प्रमुख इलेक्ट्रिकल मार्केट में उपलब्ध हैं।',
      q4: 'वारंटी अवधि क्या है?',
      a4: 'हम अपने सभी कूलिंग यूनिटों पर 1 साल की व्यापक वारंटी प्रदान करते हैं, जो निर्माण दोष और मोटर विफलता को कवर करती है।',
      q5: 'क्या आप कस्टमाइज़्ड सॉल्यूशंस प्रदान करते हैं?',
      a5: 'हाँ! हम कस्टम टैंक क्षमता (100L से 200L) प्रदान करते हैं और आपकी विशिष्ट आवश्यकताओं के अनुसार कूलिंग यूनिट को तैयार कर सकते हैं।',
    },
    footer: {
      heading: 'अपने अगले बड़े आयोजन को सुसज्जित करें।',
      desc: 'बल्क ऑर्डर, लॉजिस्टिक्स और डीलरशिप के लिए आज ही संपर्क करें।',
      email: 'ईमेल सेल्स टीम',
      copyright: 'इंडिवा इनोवेशंस। सर्वाधिकार सुरक्षित।',
      made: 'के साथ बनाया गया',
      inCity: 'वाराणसी, भारत में।',
    },
    contact: {
      title: 'संपर्क करें',
      desc: 'कोई प्रश्न या ऑर्डर देने के लिए तैयार हैं? नीचे फॉर्म भरें, हमारी टीम 24 घंटे में आपसे संपर्क करेगी।',
      name: 'आपका नाम',
      email: 'ईमेल पता',
      phone: 'फ़ोन नंबर',
      message: 'आपका संदेश',
      submit: 'संदेश भेजें',
      success: 'धन्यवाद! हम जल्द ही आपसे संपर्क करेंगे।',
      close: 'बंद करें',
    },
    gallery: { title: 'उत्पाद गैलरी', subtitle: 'स्टॉर्म 5000 को एक्शन में देखें।' },
    testimonials: { title: 'हमारे ग्राहक क्या कहते हैं', subtitle: 'पूरे भारत में इवेंट ऑर्गनाइज़र्स द्वारा विश्वसनीय।' },
    statsTitle: 'इंडिवा इनोवेशंस आंकड़ों में',
    backToTop: 'ऊपर जाएँ',
    languageToggle: 'English',
  },
};

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('lang') || 'en';
    }
    return 'en';
  });

  const toggleLang = () => {
    setLang(prev => {
      const next = prev === 'en' ? 'hi' : 'en';
      localStorage.setItem('lang', next);
      return next;
    });
  };

  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
