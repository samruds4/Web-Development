// Complete Government Schemes Data for AgroMitra Website
const allGovernmentSchemes = [
    {
      id: 1,
      title: "Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)",
      state: "All",
      category: "Farming",
      description: "₹6,000 annually to eligible farmers in three installments.",
      language: {
        hi: "पात्र किसानों को सालाना ₹6,000 तीन किश्तों में।"
      },
      applyLink: "https://pmkisan.gov.in"
    },
    {
      id: 2,
      title: "Rythu Bandhu Scheme",
      state: "Telangana",
      category: "Farming",
      description: "₹5,000 per acre per season to farmers for both Rabi and Kharif crops.",
      language: {
        te: "రబీ మరియు ఖరీఫ్ సీజన్లకు ప్రతి ఎకరానికి రూ.5000"
      },
      applyLink: "https://rythubandhu.telangana.gov.in"
    },
    {
      id: 3,
      title: "Bhavantar Bhugtan Yojana",
      state: "Madhya Pradesh",
      category: "Farming",
      description: "Compensates farmers when market prices fall below MSP.",
      language: {
        hi: "बाजार मूल्य एमएसपी से कम होने पर किसानों को मुआवजा।"
      },
      applyLink: "https://mpkrishi.mp.gov.in"
    },
    {
      id: 4,
      title: "Rajiv Gandhi Kisan Nyay Yojana",
      state: "Chhattisgarh",
      category: "Farming",
      description: "Financial assistance to farmers to increase crop production.",
      language: {
        hi: "कृषि उत्पादन बढ़ाने के लिए किसानों को आर्थिक सहायता।"
      },
      applyLink: "https://rgkny.cg.nic.in"
    },
    {
      id: 5,
      title: "Pradhan Mantri Fasal Bima Yojana (PMFBY)",
      state: "All",
      category: "Insurance",
      description: "Crop insurance against natural calamities with low premium.",
      language: {
        hi: "प्राकृतिक आपदाओं के खिलाफ फसल बीमा।"
      },
      applyLink: "https://pmfby.gov.in"
    },
    {
      id: 6,
      title: "PM Kisan Maan-Dhan Yojana",
      state: "All",
      category: "Pension",
      description: "Monthly pension of ₹3,000 for farmers after age 60.",
      language: {
        hi: "60 वर्ष के बाद किसानों को ₹3,000 मासिक पेंशन।"
      },
      applyLink: "https://maandhan.in"
    },
    {
      id: 7,
      title: "Soil Health Card Scheme",
      state: "All",
      category: "Farming",
      description: "Soil cards to promote balanced fertilizer usage.",
      language: {
        hi: "मिट्टी स्वास्थ्य कार्ड से संतुलित उर्वरक उपयोग को बढ़ावा।"
      },
      applyLink: "https://soilhealth.dac.gov.in"
    },
    {
      id: 8,
      title: "Atal Bhujal Yojana",
      state: "Gujarat, Haryana, Karnataka, Madhya Pradesh, Maharashtra, Rajasthan, Uttar Pradesh",
      category: "Water Management",
      description: "Sustainable groundwater management with community participation.",
      language: {
        hi: "समुदाय की भागीदारी से भूजल प्रबंधन।"
      },
      applyLink: "https://jalshakti-dowr.gov.in"
    },
    {
      id: 9,
      title: "Agriculture Infrastructure Fund (AIF)",
      state: "All",
      category: "Infrastructure",
      description: "Provides financing for post-harvest management and community farming assets.",
      language: {
        hi: "उत्पादन के बाद प्रबंधन और सामुदायिक कृषि संपत्ति के लिए वित्त पोषण।"
      },
      applyLink: "https://aif.gov.in"
    },
    {
      id: 10,
      title: "National Food Security Mission (NFSM)",
      state: "All",
      category: "Farming",
      description: "Enhances rice, wheat, pulses, and coarse cereals production.",
      language: {
        hi: "चावल, गेहूं, दालों और मोटे अनाजों के उत्पादन को बढ़ावा।"
      },
      applyLink: "https://nfsm.gov.in"
    },
    {
      id: 11,
      title: "Sub-Mission on Agricultural Mechanization (SMAM)",
      state: "All",
      category: "Farming",
      description: "Facilitates access to agricultural machinery for small and marginal farmers.",
      language: {
        hi: "छोटे और सीमांत किसानों के लिए कृषि यंत्रीकरण तक पहुंच को बढ़ावा।"
      },
      applyLink: "https://agrimachinery.nic.in"
    },
    {
      id: 12,
      title: "Pradhan Mantri Krishi Sinchayee Yojana (PMKSY)",
      state: "All",
      category: "Water Management",
      description: "Aims to increase irrigation coverage to enhance crop production.",
      language: {
        hi: "कृषि उत्पादन बढ़ाने के लिए सिंचाई कवरेज में वृद्धि।"
      },
      applyLink: "https://pmksy.gov.in"
    },
    {
      id: 13,
      title: "Paramparagat Krishi Vikas Yojana (PKVY)",
      state: "All",
      category: "Farming",
      description: "Promotes organic farming with cluster-based approach.",
      language: {
        hi: "क्लस्टर-आधारित तरीके से जैविक खेती को बढ़ावा।"
      },
      applyLink: "https://pkvy.gov.in"
    },
    {
      id: 14,
      title: "National Mission for Sustainable Agriculture (NMSA)",
      state: "All",
      category: "Farming",
      description: "Focuses on sustainable agriculture practices to combat climate change.",
      language: {
        hi: "जलवायु परिवर्तन से निपटने के लिए सतत कृषि प्रथाओं पर जोर।"
      },
      applyLink: "https://nmsa.gov.in"
    },
    {
      id: 15,
      title: "Pradhan Mantri Annadata Aay Sanrakshan Abhiyan (PM-AASHA)",
      state: "All",
      category: "Farming",
      description: "Aims to support farmers' income by ensuring MSP on crops.",
      language: {
        hi: "फसलों पर न्यूनतम समर्थन मूल्य सुनिश्चित करने के लिए किसानों की आय का समर्थन।"
      },
      applyLink: "https://pm-aasha.gov.in"
    },
    {
      id: 16,
      title: "National Beekeeping & Honey Mission (NBHM)",
      state: "All",
      category: "Farming",
      description: "Supports scientific beekeeping and honey production.",
      language: {
        hi: "वैज्ञानिक मधुमक्खी पालन और शहद उत्पादन को बढ़ावा।"
      },
      applyLink: "https://nbhm.gov.in"
    },
    {
      id: 17,
      title: "Kisan Credit Card (KCC) Scheme",
      state: "All",
      category: "Farming",
      description: "Provides short-term and long-term credit support to farmers.",
      language: {
        hi: "किसानों को अल्पकालिक और दीर्घकालिक ऋण सहायता।"
      },
      applyLink: "https://nabard.org"
    },
    {
      id: 18,
      title: "Rashtriya Krishi Vikas Yojana (RKVY)",
      state: "All",
      category: "Farming",
      description: "Promotes agriculture development through state-level interventions.",
      language: {
        hi: "राज्य स्तर पर कृषि विकास को बढ़ावा।"
      },
      applyLink: "https://rkvy.nic.in"
    },
    {
      id: 19,
      title: "Zero Budget Natural Farming (ZBNF)",
      state: "Andhra Pradesh, Telangana",
      category: "Farming",
      description: "Encourages chemical-free, low-cost farming practices.",
      language: {
        hi: "रासायनिक मुक्त और कम लागत वाली खेती को बढ़ावा।"
      },
      applyLink: "https://zbnf.in"
    },
    {
      id: 20,
      title: "Madhya Pradesh State Farmers Welfare Scheme",
      state: "Madhya Pradesh",
      category: "Farming",
      description: "Offers financial assistance to farmers for crop production.",
      language: {
        hi: "कृषि उत्पादन के लिए किसानों को वित्तीय सहायता।"
      },
      applyLink: "https://mpkrishi.mp.gov.in"
    },
    // Adding more schemes for different categories to ensure filtering works properly
    {
      id: 21,
      title: "Mukhyamantri Krishi Ashirwad Yojana",
      state: "Jharkhand",
      category: "Farming",
      description: "Provides financial assistance for paddy, maize, and pulses farming.",
      language: {
        hi: "धान, मक्का, और दालों की खेती के लिए वित्तीय सहायता।"
      },
      applyLink: "https://agriculture.jharkhand.gov.in"
    },
    {
      id: 22,
      title: "Pradhan Mantri Krishi Sinchayee Yojana - Har Khet Ko Pani",
      state: "All",
      category: "Water Management",
      description: "Provides irrigation solutions to increase farm productivity.",
      language: {
        hi: "कृषि उत्पादकता बढ़ाने के लिए सिंचाई समाधान प्रदान करता है।"
      },
      applyLink: "https://pmksy.gov.in"
    },
    {
      id: 27,
      title: "Mahatma Gandhi National Rural Employment Guarantee Act (MGNREGA)",
      state: "All",
      category: "Employment",
      description: "Provides wage employment in rural areas with a focus on sustainable agriculture.",
      language: {
        hi: "ग्रामीण क्षेत्रों में रोजगार प्रदान करता है, जिसमें सतत कृषि पर ध्यान केंद्रित है।"
      },
      applyLink: "https://mgnrega.gov.in"
    },
    {
      id: 30,
      title: "NABARD Watershed Development Fund",
      state: "All",
      category: "Water Management",
      description: "Funds for watershed development projects in rural areas.",
      language: {
        hi: "ग्रामीण क्षेत्रों में जलागम विकास परियोजनाओं के लिए निधि।"
      },
      applyLink: "https://nabard.org"
    },
    {
      id: 40,
      title: "Swarna Jayanti Shahari Rozgar Yojana (SJSRY)",
      state: "All",
      category: "Employment",
      description: "Provides employment opportunities in urban areas to rural farmers.",
      language: {
        hi: "ग्रामीण किसानों को शहरी क्षेत्रों में रोजगार के अवसर प्रदान करता है।"
      },
      applyLink: "https://moud.gov.in"
    },
    {
      id: 48,
      title: "Swachh Bharat Mission (Gramin)",
      state: "All",
      category: "Rural Development",
      description: "Promotes sanitation and cleanliness in rural areas, improving living conditions for farmers.",
      language: {
        hi: "ग्रामीण क्षेत्रों में स्वच्छता और सफाई को बढ़ावा देता है, जिससे किसानों की जीवन स्थितियों में सुधार होता है।"
      },
      applyLink: "https://swachhbharatmission.gov.in"
    },
    {
      id: 49,
      title: "Kisan Fasal Bima Yojana",
      state: "All",
      category: "Insurance",
      description: "Provides crop insurance to protect farmers from financial loss due to natural calamities.",
      language: {
        hi: "प्राकृतिक आपदाओं से होने वाले वित्तीय नुकसान से किसानों को सुरक्षा प्रदान करता है।"
      },
      applyLink: "https://pmfby.gov.in"
    },
    {
      id: 60,
      title: "Pradhan Mantri Gramin Awas Yojana (PMAY-G)",
      state: "All",
      category: "Rural Development",
      description: "Aims to provide housing for rural farmers and low-income families.",
      language: {
        hi: "ग्रामीण किसानों और निम्न-आय वाले परिवारों को आवास प्रदान करने का लक्ष्य।"
      },
      applyLink: "https://pmayg.nic.in"
    },
    {
      id: 93,
      title: "Pradhan Mantri Gramodaya Yojana",
      state: "All",
      category: "Rural Development",
      description: "Enhances rural infrastructure, sanitation, and other facilities.",
      language: {
        hi: "ग्रामीण बुनियादी ढांचे, स्वच्छता और अन्य सुविधाओं को बढ़ावा देता है।"
      },
      applyLink: "https://gramodaya.gov.in"
    },
    {
      id: 104,
      title: "Pradhan Mantri Kisan Pension Yojana (PMKPY)",
      state: "All",
      category: "Pension",
      description: "A pension scheme for farmers aged 60 years and above.",
      language: {
        hi: "60 वर्ष और उससे अधिक आयु के किसानों के लिए पेंशन योजना।"
      },
      applyLink: "https://pmkmy.gov.in"
    },
    {
      id: 108,
      title: "Atmanirbhar Bharat Abhiyan for Farmers",
      state: "All",
      category: "Farming",
      description: "Focuses on self-reliance for farmers through technology and infrastructure development.",
      language: {
        hi: "कृषि में आत्मनिर्भरता पर ध्यान केंद्रित करता है।"
      },
      applyLink: "https://atmanirbharbharat.gov.in"
    }
];

// Export the schemes for use in the govt-schemes.html page
window.governmentSchemes = allGovernmentSchemes; 