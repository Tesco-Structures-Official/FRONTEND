// JSON-LD structured data for each page.
// Source of truth: "All Pages Schema Codes" document. Values are reproduced
// exactly; only whitespace/formatting is normalized by the build.
// Injected into <head> by the Seo component (src/components/Seo.jsx).

export const homeSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.tescostructures.com/"
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Tesco Structures",
    "image": "https://tescostructures.com/ts-logo.png",
    "url": "https://tescostructures.com/",
    "telephone": "90033 28229",
    "email": "info@tescostructures.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "37, 15th St, Gandhi Nagar",
      "addressLocality": "Chennai",
      "addressRegion": "Tamil Nadu",
      "postalCode": "600083",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "13.0346",
      "longitude": "80.2251"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "09:30",
        "closes": "19:00"
      }
    ],
    "priceRange": "??",
    "sameAs": [
      "https://www.linkedin.com/company/tesco-structures/",
      "https://www.facebook.com/tescostructures/",
      "https://www.youtube.com/@TESCOSTRUCTURES",
      "https://www.instagram.com/tesco_structures/"
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is a Pre-Engineered Building (PEB)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A Pre-Engineered Building is a steel structure designed and fabricated in a factory, then bolted together on site. Every column, rafter and roof sheet is engineered to carry only the load it needs, so it uses less steel. That precise, ready-to-assemble approach is what makes PEB faster and lighter than building from scratch."
        }
      },
      {
        "@type": "Question",
        "name": "What are the advantages of PEB structures?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "PEB structures go up faster, cost less and weigh less than concrete, since the steel is fabricated while site work runs in parallel. They give wide column-free spans, easy future expansion and factory-grade quality control. In short, you get a stronger building, sooner, for less money."
        }
      },
      {
        "@type": "Question",
        "name": "Where are PEB buildings commonly used?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "PEB buildings are the go-to for warehouses, cold storage, factories, logistics hubs and aircraft hangars. They also suit showrooms, supermarkets, sports halls, poultry sheds, workshops and railway buildings. Anywhere that needs a large, quick, column-free single-storey space, PEB fits the brief."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to construct a PEB building?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A small-to-medium PEB building can be fabricated and erected in about 8–12 weeks, with foundation work running alongside. A 1,00,000 sq ft warehouse takes roughly 7–11 months in PEB versus 19–28 months in conventional RCC. The exact timeline depends on approvals, site conditions and weather, but PEB consistently saves months."
        }
      },
      {
        "@type": "Question",
        "name": "Is a PEB building cost-effective compared to conventional construction?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For most warehouses and factories, yes a PEB structure beats conventional construction on total cost. Optimised design saves steel, the lighter frame needs a smaller foundation, and the faster build cuts labour and interest. Finishing months earlier also lets you use or rent the space sooner, so PEB usually wins both upfront and long term."
        }
      },
      {
        "@type": "Question",
        "name": "PEB warehouse construction cost",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In India, PEB warehouse construction cost runs about ?300–?450 per sq ft for the steel structure alone (frame and roofing). A full turnkey warehouse with foundation, flooring and cladding works out to roughly ?1,400–?2,600 per sq ft. Your final rate depends on span, height, steel grade, location and current steel prices."
        }
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Tesco Structures",
    "url": "https://www.tescostructures.com/",
    "logo": "https://tescostructures.com/ts-logo.png",
    "description": "Tesco Structures provides turnkey Pre-Engineered Buildings in Chennai — from design to on-site erection of warehouses, factories, sheds & MEP. Get a quote.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91 90033 28229",
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": [
        "English",
        "Tamil"
      ]
    },
    "sameAs": [
      "https://www.linkedin.com/company/tesco-structures/",
      "https://www.facebook.com/tescostructures/",
      "https://www.youtube.com/@TESCOSTRUCTURES",
      "https://www.instagram.com/tesco_structures/"
    ]
  }
];

export const pebSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.tescostructures.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "PEB Contractors in Chennai",
        "item": "https://www.tescostructures.com/peb-contractors-in-chennai/"
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Pre-Engineered Buildings Chennai | Tesco Structures",
    "url": "https://www.tescostructures.com/peb-contractors-in-chennai/",
    "description": "15+ years building pre-engineered steel structures across South India. Warehouses, factories, cold storage & more —  IS-code engineered, on time. Book a visit."
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Which are the best PEB contractors in Chennai for industrial projects?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Depends what you mean by best. PEB contractors in Chennai are plenty —  but ones who do the full job themselves? Shorter list. Tesco Structures: 500+ industrial buildings, in-house everything."
        }
      },
      {
        "@type": "Question",
        "name": "Can anyone recommend reliable pre-engineered building contractors in Chennai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our Oragadam factory —  45,000 sq.ft. Handed over 6 days early. Pre-engineered building contractors in Chennai rarely do that. Engineers on payroll, not borrowed from somewhere else."
        }
      },
      {
        "@type": "Question",
        "name": "What is the leading PEB construction company in Chennai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "PEB construction company in Chennai that does design, fab and erection in-house —  without splitting it to three different vendors? Tesco Structures. That setup alone reduces a lot of problems."
        }
      },
      {
        "@type": "Question",
        "name": "Who provides turnkey PEB solutions in Chennai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Turnkey PEB in Chennai means soil test to keys in hand, one contract. Tesco does exactly that. No other party to blame when something shifts. One call handles everything."
        }
      },
      {
        "@type": "Question",
        "name": "Which company offers complete PEB design and build services in Chennai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Steel building contractors in Chennai who put the structural engineer and fabrication manager in the same office —  that's Tesco. Most split it. When they're separated, things fall through."
        }
      },
      {
        "@type": "Question",
        "name": "What are the best companies for PEB warehouse construction in Chennai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Warehouse construction in Chennai —  58m clear span, no columns, crane provision, two future expansion bays. Tesco Structures did it. Eave height 12m. Zero drama at handover."
        }
      },
      {
        "@type": "Question",
        "name": "Who are the top industrial PEB building contractors in Chennai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Industrial building contractors in Chennai with pharma, auto ancillary and cold-chain experience? Tesco Structures has done all three across Irungattukottai, Sriperumbudur, and Ponneri."
        }
      },
      {
        "@type": "Question",
        "name": "Which PEB structure contractors in Chennai have experience with large factories?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Steel structure contractors in Chennai who've handled 80m spans and 30T crane beams with inhouse structural design —  Tesco Structures. No waiting for third-party consultant approvals."
        }
      },
      {
        "@type": "Question",
        "name": "Can you suggest PEB building erection contractors in Chennai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "PEB erection contractors in Chennai who keep a permanent trained crew across all sites —  not daily-wage workers assembled per project —  Tesco Structures. IS:800 compliant, documented checks."
        }
      },
      {
        "@type": "Question",
        "name": "What is the cost of PEB shed construction in Chennai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "PEB shed construction in Chennai typically costs Rs.1,400– 2,200 per sq.ft. depending on span, height and crane load. Tesco provides a detailed line-item BOQ before signing."
        }
      },
      {
        "@type": "Question",
        "name": "Which are the most trusted PEB companies in Tamil Nadu?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "PEB companies in Tamil Nadu with 15+ years experience and 500+ completed buildings include Tesco Structures, serving Chennai, Coimbatore, Madurai, and Trichy."
        }
      },
      {
        "@type": "Question",
        "name": "Who is the best PEB construction company in Tamil Nadu for manufacturing units?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "PEB construction for manufacturing in Tamil Nadu requires crane beam planning, mezzanine design, ventilation cutouts and process-specific loads. Tesco Structures designs for real usage."
        }
      },
      {
        "@type": "Question",
        "name": "What are the leading pre-engineered building manufacturers in Tamil Nadu?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Pre-engineered building manufacturers in Tamil Nadu with ISO-certified in-house fabrication and IS:800 compliant frames include Tesco Structures with full traceability of materials."
        }
      },
      {
        "@type": "Question",
        "name": "Which are the top PEB companies and contractors in South India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "PEB contractors in South India operating across Tamil Nadu, Karnataka, Andhra Pradesh, Telangana, and Kerala with consistent delivery standards include Tesco Structures."
        }
      }
    ]
  }
];

export const tensileSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.tescostructures.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Tensile Roofing Chennai",
        "item": "https://www.tescostructures.com/tensile-roofing-chennai"
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Tensile Roofing Services in Chennai | Tesco Structures",
    "url": "https://www.tescostructures.com/tensile-roofing-chennai",
    "description": "Expert tensile roofing services in Chennai. Custom tensile fabric structures for car parking, malls & stadiums. 15+ years. 350+ spans. Free site inspection."
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What are tensile roofing services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tensile roofing services cover the full process of designing, fabricating, and installing fabric membrane structures — PVC, PVDF, or PTFE — stretched over steel frames and cables to create column-free covered spaces. Car parks, stadium grandstands, mall plazas, pool decks, walkways. The structure gets its strength from the tension in the fabric, not from a heavy frame underneath."
        }
      },
      {
        "@type": "Question",
        "name": "Why choose professional tensile structure services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A tensile structure that's incorrectly engineered either leaks in the first monsoon or fails structurally within a few years. Professional tensile structure services bring site-specific wind-load calculations, correctly sized drainage for local rainfall intensity, and membrane specifications that match actual exposure conditions — not generic defaults copied from a project somewhere else. The difference shows up at year two or three, not on handover day."
        }
      },
      {
        "@type": "Question",
        "name": "Who are the best tensile roofing contractors in Chennai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The best tensile roofing contractors in Chennai are the ones with a verifiable project history in the city — not just brochure photos. Ask for completed job addresses, check whether the crew is in-house or subcontracted, and ask how they calculate drainage for the Northeast Monsoon. Tesco Structures has 15 years of documented work across Chennai, with 350+ installations that clients can visit and inspect."
        }
      },
      {
        "@type": "Question",
        "name": "How do I find a reliable tensile structure company in Chennai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A reliable tensile structure company in Chennai will have in-house engineers, their own fabrication facility, and a crew that has handled projects in local climate conditions — sea air, monsoon rainfall, and 44C summer heat. Ask for IS:875 wind-load calculations specific to your site. Ask whether installation is their own team or day labour. Those two questions usually tell you what you need to know."
        }
      },
      {
        "@type": "Question",
        "name": "What are the benefits of a car parking tensile structure?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A car parking tensile structure cuts surface temperature by 15–20C compared to exposed tarmac, blocks 95–99% of UV that degrades vehicle paint and interiors, and keeps the lot functional through heavy monsoon rain. It loads to the perimeter, so no columns eat into parking bays. In Chennai's climate — June heat and Northeast Monsoon both — the payback calculation is straightforward."
        }
      },
      {
        "@type": "Question",
        "name": "How is tensile fabric structure installation done?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tensile fabric structure installation follows a set sequence: site survey and structural assessment first, then steel frame fabrication and membrane cutting in the workshop, then steel erection on site, membrane attachment, and finally tensioning to the engineered pre-stress spec. The tensioning stage is what separates a properly installed structure from one that fails under wind or rain at year three."
        }
      },
      {
        "@type": "Question",
        "name": "How long does tensile roof structure installation take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tensile roof structure installation timelines depend on size and complexity. A standard car park canopy for 50–100 vehicles typically takes 10–20 days on site once the steel is ready. A large-span stadium or mall structure may take 4–8 weeks. The fabrication lead time — 3 to 6 weeks before site work begins — is the part most clients underestimate when planning project schedules."
        }
      },
      {
        "@type": "Question",
        "name": "What are architectural tensile structures?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Architectural tensile structures are fabric membrane roofing systems designed not just for function but as deliberate visual elements of a building or landscape. A conical tensile gazebo at a hotel entrance, a hypar canopy over a mall plaza, a free-form fabric canopy at a transit hub — these are architectural tensile structures. The geometry is engineered for structural performance and specified for form at the same time."
        }
      },
      {
        "@type": "Question",
        "name": "Why hire tensile roofing fabricators in Chennai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tensile roofing fabricators in Chennai understand the conditions the structure needs to survive — coastal salt air, 44C summer ambient, Northeast Monsoon rainfall that generic national specs don't account for. Local fabricators can visit your site quickly, manage installation directly, and respond without the lag of coordinating from another city. When a problem comes up mid-installation, proximity matters."
        }
      },
      {
        "@type": "Question",
        "name": "What are the best tensile roofing solutions for commercial spaces?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The best tensile roofing solutions for commercial spaces balance span, aesthetics, and drainage for the specific application. Hypar forms work well over large plazas and car parks — structurally efficient and visually clean. Barrel vaults suit long retail corridors and walkways. Conical multi-point forms work for food court zones and outdoor seating. The right tensile roofing solution depends on your floor plan, available anchor points, and what the space needs to look like."
        }
      },
      {
        "@type": "Question",
        "name": "Who are the leading tensile roofing manufacturers in Chennai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tesco Structures is one of Chennai's established tensile roofing manufacturers, with an in-house fabrication facility, 15 years of production experience, and 350+ spans across South India. We fabricate using high-frequency welding equipment that creates seams as strong as the base fabric, and source PVC, PVDF, and PTFE membranes from certified global suppliers — the same materials used in international landmark structures."
        }
      },
      {
        "@type": "Question",
        "name": "What are the advantages of tensile fabric roof installation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tensile fabric roof installation delivers weather protection over large spans without intermediate columns, at lower total cost than RCC or heavy metal for areas above 15–20 metres. The membrane is lightweight, cutting foundation loads significantly. Installation is faster than conventional roofing. The finished structure diffuses natural light, blocks 95–99% UV, and needs minimal maintenance over a 15–30 year lifespan depending on membrane grade."
        }
      },
      {
        "@type": "Question",
        "name": "How do I choose the right tensile structure contractor?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Check three things: project history in your specific application type — car park, pool, and stadium are different engineering briefs. Whether the tensile structure contractor has in-house structural engineers producing site-specific calculations. Whether the installation crew is their own or subcontracted. A contractor who subcontracts installation is also subcontracting quality control. Ask to visit a completed project in Chennai before signing anything."
        }
      },
      {
        "@type": "Question",
        "name": "Why are membrane tensile structures widely used today?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Membrane tensile structures solve a problem no other roofing system handles as well: covering very large open areas without columns, at manageable cost, with a finished appearance that improves the space rather than just covering it. They're used in airports, stadiums, transit hubs, and commercial developments worldwide for the same reasons they work in Chennai — column-free span, low self-weight, and a structural form that manages wind loads better than flat rigid alternatives."
        }
      }
    ]
  }
];

export const civilSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.tescostructures.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Civil Construction Services",
        "item": "https://www.tescostructures.com/civil-construction-services/"
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Civil Construction Company in Chennai | Tesco Structure",
    "url": "https://www.tescostructures.com/civil-construction-services/",
    "description": "Tesco Structure –  trusted civil construction company in Chennai, Coimbatore, Madurai & South India. RCC foundations & turnkey civil works. Get a free quote today."
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What does a civil construction company do?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A civil construction company handles soil investigation, foundation design, RCC framing, structural slabs, masonry, waterproofing, and drainage—everything structural before finishes begin. It's the work that determines whether your building remains safe and durable for the next 50 years."
        }
      },
      {
        "@type": "Question",
        "name": "What are civil construction services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Civil construction services cover foundation engineering, pile work, RCC framing, slab construction, load-bearing masonry, basement waterproofing, storm drainage, and BOQ preparation. These services include all structural work from soil investigation to completed frame handover."
        }
      },
      {
        "@type": "Question",
        "name": "What is construction and civil engineering?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Construction and civil engineering work together to deliver safe structures. Civil engineering handles soil analysis, structural calculations, and code-compliant drawings, while construction manages materials, labour, and site execution. Close coordination ensures structures perform as designed."
        }
      },
      {
        "@type": "Question",
        "name": "What is heavy civil construction?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Heavy civil construction involves large-scale projects such as industrial plant foundations, multi-storey RCC structures, deep basement excavations, retaining walls, and high-capacity warehouse slabs. These projects require specialized engineering and construction expertise."
        }
      },
      {
        "@type": "Question",
        "name": "Why is civil construction design important?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Civil construction design determines structural safety, load capacity, and long-term durability. Incorrect foundation depth, rebar detailing, or concrete specifications can cause cracks and settlement over time. Proper design from the beginning reduces future repair costs."
        }
      },
      {
        "@type": "Question",
        "name": "Which is the best civil construction company in Chennai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tesco Structure is one of the trusted civil construction companies in Chennai, with over 15 years of experience across Ambattur, OMR, Tambaram, and Guindy. The company specializes in handling coastal soil conditions, high water tables, and pile foundation engineering."
        }
      },
      {
        "@type": "Question",
        "name": "What services does a civil construction company in Madurai offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A civil construction company in Madurai typically provides foundation engineering, RCC frame construction, slab work, masonry, waterproofing, and DTCP approval support. Proper foundation design is especially important due to local expansive soil conditions."
        }
      },
      {
        "@type": "Question",
        "name": "Why hire civil construction contractors?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Civil construction contractors provide licensed structural engineering expertise, code compliance, quality control, and material testing. Hiring qualified contractors helps avoid costly structural issues caused by poor construction practices."
        }
      },
      {
        "@type": "Question",
        "name": "What is civil works construction?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Civil works construction refers to the execution of structural elements such as foundations, RCC columns, slabs, drainage systems, and waterproofing. It is the practical implementation of engineering designs on site."
        }
      },
      {
        "@type": "Question",
        "name": "How does civil engineering and construction work together?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Civil engineering and construction work together when site teams execute structural drawings accurately, following specifications for reinforcement, concrete grades, and detailing. Proper coordination ensures structural integrity and project quality."
        }
      },
      {
        "@type": "Question",
        "name": "What types of civil construction projects are common?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Common civil construction projects include apartments, villas, factories, warehouses, hospitals, office buildings, schools, and retail complexes. Each project type requires specific structural design and engineering considerations."
        }
      },
      {
        "@type": "Question",
        "name": "What is construction civil engineering building work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Construction civil engineering building work includes geotechnical investigation, foundation construction, RCC framing, masonry, waterproofing, and drainage systems. These structural activities are completed before architectural finishes begin."
        }
      },
      {
        "@type": "Question",
        "name": "How do I choose a civil construction company in Coimbatore?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Choose a civil construction company in Coimbatore with licensed structural engineers, DTCP project experience, quality testing records, and proven expertise in local soil conditions. Reviewing completed projects and test reports is recommended."
        }
      },
      {
        "@type": "Question",
        "name": "Why hire a civil construction company in South India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "South India's varied soil conditions, seismic requirements, and local approval processes require regional expertise. Experienced civil construction companies understand these challenges and can deliver structurally sound, compliant projects across the region."
        }
      }
    ]
  }
];

export const archSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.tescostructures.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Architectural Design & Structural Consultancy",
        "item": "https://www.tescostructures.com/architectural-design-structural-consultancy-chennai/"
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Architectural Design & Structural Consultancy | Tesco Structures",
    "url": "https://www.tescostructures.com/architectural-design-structural-consultancy-chennai/",
    "description": "Expert architectural design and structural consultancy in Chennai & South India. ISO-certified. 15+ years. 150+ projects. STAAD Pro, ETABS, BIM. Call for a free proposal."
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Architectural Design & Structural Consultancy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Architectural Design & Structural Consultancy combines building design and structural engineering under one service. Architects handle layouts, elevations, and approval drawings, while structural engineers ensure the building safely carries all design loads. Coordinated design reduces conflicts during construction."
        }
      },
      {
        "@type": "Question",
        "name": "Why hire a Structural Consultancy Company?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A structural consultancy company evaluates critical decisions such as column placement, slab thickness, and foundation design before construction begins. Proper structural analysis helps control costs, improve safety, and prevent expensive modifications during construction."
        }
      },
      {
        "@type": "Question",
        "name": "What does an Architectural & Structural Consultant do?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "An architectural and structural consultant manages site analysis, architectural planning, elevations, structural modelling, engineering calculations, GFC drawings, and approval documentation. Many projects also include BIM coordination, MEP integration, and 3D visualization services."
        }
      },
      {
        "@type": "Question",
        "name": "Why are Structural Engineering Consultancy services important?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Structural engineering consultancy services ensure buildings comply with relevant standards, safely resist gravity, wind, and seismic loads, and perform reliably throughout their design life. Proper engineering reduces the risk of structural failures and costly repairs."
        }
      },
      {
        "@type": "Question",
        "name": "What is included in Structural Consultancy Services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Structural consultancy services typically include structural analysis, foundation design, member sizing, GFC drawings, reinforcement detailing, steel connection design, bar bending schedules, calculation reports, stability certificates, and design reviews."
        }
      },
      {
        "@type": "Question",
        "name": "How do Architectural Design Consultancy Services benefit a project?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Architectural design consultancy services streamline planning, approvals, and design coordination. When architects, structural engineers, and MEP consultants work together, projects experience fewer drawing conflicts, faster approvals, and smoother execution."
        }
      },
      {
        "@type": "Question",
        "name": "What is Structural Design and Engineering?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Structural design and engineering involves analyzing and detailing load-bearing elements such as foundations, columns, beams, slabs, and shear walls to ensure safe performance under dead, live, wind, and seismic loads."
        }
      },
      {
        "@type": "Question",
        "name": "Why choose Architectural & Engineering Consultants?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Architectural and engineering consultants provide a single point of responsibility for design and structural coordination. This approach reduces communication gaps, improves project efficiency, and allows design changes to be resolved quickly."
        }
      },
      {
        "@type": "Question",
        "name": "What services does a Structural Architectural Consultancy provide?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A structural architectural consultancy typically offers architectural planning, structural analysis and design, BIM coordination, approval drawings, MEP integration, stability certificates, construction support, and 3D visualization services."
        }
      },
      {
        "@type": "Question",
        "name": "When do I need Building Structural Consultants?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Building structural consultants are required for new construction, building extensions, additional floors, structural modifications, stability certification, and projects requiring engineering approvals from local authorities or financial institutions."
        }
      },
      {
        "@type": "Question",
        "name": "Why choose Architectural Design Services in South India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Architectural design services in South India provide expertise in regional building regulations, approval procedures, local soil conditions, and state-specific construction practices. This knowledge helps reduce delays and approval revisions."
        }
      },
      {
        "@type": "Question",
        "name": "How can Structural Consultancy Services in Chennai help my project?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Structural consultancy services in Chennai provide engineering solutions tailored to local soil conditions, seismic requirements, and foundation challenges. Site-specific structural recommendations improve safety, durability, and construction efficiency."
        }
      },
      {
        "@type": "Question",
        "name": "Why hire Architectural & Structural Consultants in Chennai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Architectural and structural consultants in Chennai understand local approval requirements, seismic detailing standards, regional soil behavior, and construction practices. Their expertise helps ensure smoother approvals and better project execution."
        }
      },
      {
        "@type": "Question",
        "name": "What are the benefits of Residential and Commercial Architectural Design across South India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Residential and commercial architectural design services provide coordinated planning, regulatory compliance, structural integration, and project continuity. A single design team helps minimize coordination issues and improves project delivery across all stages."
        }
      }
    ]
  }
];

export const roofingSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.tescostructures.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Roofing Solutions Chennai",
        "item": "https://www.tescostructures.com/roofing-solutions-chennai/"
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Roofing Contractors in Chennai | Tesco Structures",
    "url": "https://www.tescostructures.com/roofing-solutions-chennai/",
    "description": "Expert roofing contractors in Chennai offering uPVC, polycarbonate, GI, glass, Mangalore tile & shingles roofing. Trusted across Tamil Nadu & South India."
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is uPVC roofing sheet in Chennai used for?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A uPVC roofing sheet in Chennai is mostly used for factory sheds, warehouses, poultry farms, and storage buildings. It doesn't rust, doesn't need painting, and holds up through monsoon and summer heat without maintenance."
        }
      },
      {
        "@type": "Question",
        "name": "How do I choose uPVC roofing contractors in Chennai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Look for uPVC roofing contractors in Chennai who give you an itemised quote — material grade, thickness, and erection cost listed separately. Ask them for a completed project reference nearby so you can see the quality of their ridge and eave finishing."
        }
      },
      {
        "@type": "Question",
        "name": "What is the average uPVC roofing price in Chennai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The uPVC roofing price in Chennai typically falls between ?185 and ?330 per sqft installed, depending on sheet thickness and whether purlin work is included. It's worth comparing this against colour-coated GI on a 10-year cost basis, not just the upfront figure."
        }
      },
      {
        "@type": "Question",
        "name": "What are the benefits of uPVC roofing services in South India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "uPVC roofing services in South India offer rust-free, lightweight cover that works well in coastal and high-humidity zones. No repainting cycle, no fastener corrosion, and a 20-plus year lifespan makes it one of the lowest-maintenance options available."
        }
      },
      {
        "@type": "Question",
        "name": "Where can I find polycarbonate roofing sheet in Chennai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Polycarbonate roofing sheet in Chennai is supplied through roofing contractors who stock twin-wall and triple-wall multi-cell panels. Go through a contractor rather than a hardware shop — the product grade and UV coating warranty matter more than the price per sheet."
        }
      },
      {
        "@type": "Question",
        "name": "Is polycarbonate sheet roofing good for car parking in Chennai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, polycarbonate sheet roofing for car parking in Chennai works well when you use twin-wall panels in bronze or opal tint, not clear single-layer sheets. It lets in diffused light, cuts heat build-up inside the cars, and holds up against hail and monsoon impact."
        }
      },
      {
        "@type": "Question",
        "name": "How to select polycarbonate roofing contractors in South India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Choose polycarbonate roofing contractors in South India who specify UV-certified panels and give you the manufacturer's warranty document in writing. A good contractor will also calculate the purlin spacing and frame load before recommending a panel thickness."
        }
      },
      {
        "@type": "Question",
        "name": "What are glass roofing services in Chennai used for?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Glass roofing services in Chennai are used for hotel lobbies, showroom atriums, corporate reception areas, and premium residential builds where light and aesthetics matter. Every installation needs proper structural engineering for wind uplift, thermal expansion, and overhead safety."
        }
      },
      {
        "@type": "Question",
        "name": "Who provides glass roofing contractors in South India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Glass roofing contractors in South India who handle design, glass procurement, steel or aluminium frame fabrication, and installation under one contract are the right choice. Avoid splitting the structural and installation scope between two vendors — that's where gaps appear."
        }
      },
      {
        "@type": "Question",
        "name": "What is GI roofing sheet in Chennai used for?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "GI roofing sheet in Chennai is the standard cover for factories, warehouses, and industrial sheds across the city's manufacturing corridors. It installs fast over large spans and holds structural strength even in heavy monsoon conditions."
        }
      },
      {
        "@type": "Question",
        "name": "How do GI roofing contractors in South India work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "GI roofing contractors in South India survey the site, calculate purlin spacing and wind load, then supply and erect colour-coated or Galvalume sheets with proper ridge and eave finishing. The better ones provide mill certificates with every material delivery and do a water-spray test before handover."
        }
      },
      {
        "@type": "Question",
        "name": "What is industrial GI roofing sheet in Chennai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Industrial GI roofing sheet in Chennai refers to heavier-gauge colour-coated or Galvalume profiles, typically 0.47mm to 0.60mm base metal, used for factory and warehouse applications. For coastal Chennai locations, Galvalume AZ-150 alloy coating is specified over standard zinc GI to resist salt-air corrosion."
        }
      },
      {
        "@type": "Question",
        "name": "Are Mangalore tile roofing services available in Chennai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Mangalore tile roofing in Chennai is available for residential, institutional, and heritage buildings. As Mangalore roof tiles contractors across South India, we handle new installations and re-bedding of existing tile roofs where the structure beneath needs attention."
        }
      },
      {
        "@type": "Question",
        "name": "What are roofing shingles installation services in South India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Shingles roofing in Chennai and across South India covers architectural laminated shingles for luxury villas, resorts, and boutique hotels. Roofing shingles installation in South India done properly with the right underlayment, starter strip, and ridge cap gives you 30 to 50 years on a good deck."
        }
      }
    ]
  }
];

export const aboutSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://tescostructures.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "About Us",
        "item": "https://www.tescostructures.com/about-us"
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "About Us –  Tesco Structures | Steel Building Experts",
    "url": "https://www.tescostructures.com/about-us",
    "description": "Meet Tesco Structures: South India's trusted PEB and steel structure company. 15+ years of turnkey warehouses, factories & sheds —  on budget, on time, built to last."
  }
];

export const careersSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.tescostructures.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Careers",
        "item": "https://www.tescostructures.com/careers"
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Construction & Engineering Jobs in Chennai | Tesco Careers",
    "url": "https://www.tescostructures.com/careers",
    "description": "Now hiring at Tesco Structures, Chennai —  structural, site & project engineers, BD and sales roles. Join a PEB and steel building team. Apply online today."
  }
];
