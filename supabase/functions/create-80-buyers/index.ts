
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";

const BUYER_DATA = [
  // EN590 Buyers (30)
  {
    "name": "John Peterson",
    "company": "BlueWave Energy Ltd",
    "country": "UAE",
    "city": "Dubai",
    "category": "EN590",
    "phone": "+971500001001",
    "email": "john.p@bluewave.com",
    "requirement": "Monthly 50,000 MT EN590"
  },
  {
    "name": "Ahmed Khan",
    "company": "Gulf Petro Trading",
    "country": "Saudi Arabia",
    "city": "Riyadh",
    "category": "EN590",
    "phone": "+966500001002",
    "email": "ahmed@gulfpetro.com",
    "requirement": "100,000 MT EN590 contract"
  },
  {
    "name": "Michael Rodrigues",
    "company": "TransFuel Corp",
    "country": "Singapore",
    "city": "Singapore",
    "category": "EN590",
    "phone": "+65670001003",
    "email": "mike@transfuel.sg",
    "requirement": "Trial 10,000 MT EN590"
  },
  {
    "name": "Omar Hassan",
    "company": "Desert Oil Imports",
    "country": "UAE",
    "city": "Abu Dhabi",
    "category": "EN590",
    "phone": "+971500001004",
    "email": "omar@desertoil.ae",
    "requirement": "12-month EN590 deal"
  },
  {
    "name": "Victor Silva",
    "company": "SouthTrade Commodities",
    "country": "Brazil",
    "city": "Rio de Janeiro",
    "category": "EN590",
    "phone": "+552100001005",
    "email": "victor@southtrade.br",
    "requirement": "20,000 MT EN590 monthly"
  },
  {
    "name": "Raj Patel",
    "company": "PetroMax Global",
    "country": "India",
    "city": "Mumbai",
    "category": "EN590",
    "phone": "+91990001006",
    "email": "raj@petromax.in",
    "requirement": "25,000 MT regular EN590"
  },
  {
    "name": "Daniel Foster",
    "company": "Global Oil Hub",
    "country": "USA",
    "city": "Houston",
    "category": "EN590",
    "phone": "+1713001007",
    "email": "daniel@globaloilhub.us",
    "requirement": "Spot + long-term EN590"
  },
  {
    "name": "Ali Reza",
    "company": "MiddleEast Fuels",
    "country": "Qatar",
    "city": "Doha",
    "category": "EN590",
    "phone": "+97450001008",
    "email": "reza@mefuels.qa",
    "requirement": "35,000 MT EN590"
  },
  {
    "name": "Chen Wei",
    "company": "AsiaFuel Imports",
    "country": "China",
    "city": "Shanghai",
    "category": "EN590",
    "phone": "+861300010009",
    "email": "chenwei@asiafuel.cn",
    "requirement": "Long term EN590 supply"
  },
  {
    "name": "Mark Anderson",
    "company": "Nordic Petroleum",
    "country": "Sweden",
    "city": "Stockholm",
    "category": "EN590",
    "phone": "+46100010010",
    "email": "mark@nordicpet.se",
    "requirement": "40,000 MT EN590"
  },
  {
    "name": "David Brooks",
    "company": "Oceanic Oil Traders",
    "country": "USA",
    "city": "Los Angeles",
    "category": "EN590",
    "phone": "+13230001011",
    "email": "david@oceanicoil.us",
    "requirement": "Spot EN590 orders"
  },
  {
    "name": "Imran Shaikh",
    "company": "FuelConnect India",
    "country": "India",
    "city": "Delhi",
    "category": "EN590",
    "phone": "+91981001012",
    "email": "imran@fuelconnect.in",
    "requirement": "Trial 5,000 MT EN590"
  },
  {
    "name": "Samir Al-Farsi",
    "company": "Oman Petro Services",
    "country": "Oman",
    "city": "Muscat",
    "category": "EN590",
    "phone": "+96870001013",
    "email": "samir@omanpetro.om",
    "requirement": "Bulk EN590 supply"
  },
  {
    "name": "George Miller",
    "company": "EuroTrade Petroleum",
    "country": "Germany",
    "city": "Berlin",
    "category": "EN590",
    "phone": "+49300010014",
    "email": "george@eurotrade.de",
    "requirement": "Annual EN590 contract"
  },
  {
    "name": "Luis Ortega",
    "company": "Latam Oil Partners",
    "country": "Mexico",
    "city": "Mexico City",
    "category": "EN590",
    "phone": "+52550001015",
    "email": "luis@latamoil.mx",
    "requirement": "Monthly recurring EN590"
  },
  {
    "name": "Hassan Noor",
    "company": "Arabian Energy",
    "country": "UAE",
    "city": "Sharjah",
    "category": "EN590",
    "phone": "+97150001016",
    "email": "hassan@arabenergy.ae",
    "requirement": "Spot EN590 cargo"
  },
  {
    "name": "Kim Young",
    "company": "Seoul Fuel Importers",
    "country": "South Korea",
    "city": "Seoul",
    "category": "EN590",
    "phone": "+82100001017",
    "email": "kimy@seoulfuel.kr",
    "requirement": "EN590 yearly"
  },
  {
    "name": "Ibrahim Musa",
    "company": "Nigeria Trade Oil",
    "country": "Nigeria",
    "city": "Lagos",
    "category": "EN590",
    "phone": "+23480001018",
    "email": "ibrahim@ntoil.ng",
    "requirement": "Bulk EN590 requirement"
  },
  {
    "name": "Carlos Gomez",
    "company": "Spain Petro Imports",
    "country": "Spain",
    "city": "Madrid",
    "category": "EN590",
    "phone": "+34910001019",
    "email": "carlos@spainpetro.es",
    "requirement": "30,000 MT EN590"
  },
  {
    "name": "Yuki Tanaka",
    "company": "Tokyo Energy Solutions",
    "country": "Japan",
    "city": "Tokyo",
    "category": "EN590",
    "phone": "+81300001020",
    "email": "yuki@tokyoenergy.jp",
    "requirement": "Regular EN590 supply"
  },
  {
    "name": "Mohammed Al-Saud",
    "company": "Kingdom Petroleum",
    "country": "Saudi Arabia",
    "city": "Jeddah",
    "category": "EN590",
    "phone": "+966500001021",
    "email": "mohammed@kingdompet.sa",
    "requirement": "50,000 MT EN590"
  },
  {
    "name": "Pierre Dubois",
    "company": "France Oil Trading",
    "country": "France",
    "city": "Paris",
    "category": "EN590",
    "phone": "+33100001022",
    "email": "pierre@franceoil.fr",
    "requirement": "Quarterly EN590 contract"
  },
  {
    "name": "Antonio Rossi",
    "company": "Italia Fuel Imports",
    "country": "Italy",
    "city": "Rome",
    "category": "EN590",
    "phone": "+39060001023",
    "email": "antonio@italiafuel.it",
    "requirement": "Monthly 15,000 MT EN590"
  },
  {
    "name": "Khalid Mansoor",
    "company": "Kuwait Energy Corp",
    "country": "Kuwait",
    "city": "Kuwait City",
    "category": "EN590",
    "phone": "+96550001024",
    "email": "khalid@kuwaitenergy.kw",
    "requirement": "Long-term EN590 deal"
  },
  {
    "name": "Robert Johnson",
    "company": "Atlantic Petroleum",
    "country": "UK",
    "city": "London",
    "category": "EN590",
    "phone": "+44200001025",
    "email": "robert@atlanticpet.uk",
    "requirement": "Spot and contract EN590"
  },
  {
    "name": "Nguyen Van",
    "company": "Vietnam Fuel Trading",
    "country": "Vietnam",
    "city": "Ho Chi Minh",
    "category": "EN590",
    "phone": "+84900001026",
    "email": "nguyen@vietnamfuel.vn",
    "requirement": "20,000 MT EN590"
  },
  {
    "name": "Abdul Rahman",
    "company": "Bahrain Oil Services",
    "country": "Bahrain",
    "city": "Manama",
    "category": "EN590",
    "phone": "+97330001027",
    "email": "abdul@bahrain oil.bh",
    "requirement": "Annual EN590 supply"
  },
  {
    "name": "James Wilson",
    "company": "Pacific Energy Group",
    "country": "Australia",
    "city": "Sydney",
    "category": "EN590",
    "phone": "+61200001028",
    "email": "james@pacificenergy.au",
    "requirement": "Bulk EN590 orders"
  },
  {
    "name": "Fatima Al-Hashimi",
    "company": "Emirates Fuel Trading",
    "country": "UAE",
    "city": "Dubai",
    "category": "EN590",
    "phone": "+971500001029",
    "email": "fatima@emiratesfuel.ae",
    "requirement": "Monthly 40,000 MT EN590"
  },
  {
    "name": "Thomas Schmidt",
    "company": "Deutsche Petroleum GmbH",
    "country": "Germany",
    "city": "Hamburg",
    "category": "EN590",
    "phone": "+49400001030",
    "email": "thomas@deutschepet.de",
    "requirement": "Year-round EN590 supply"
  },

  // SUGAR Buyers (30)
  {
    "name": "Rajesh Kumar",
    "company": "Sweet India Traders",
    "country": "India",
    "city": "Mumbai",
    "category": "SUGAR",
    "phone": "+91220002001",
    "email": "rajesh@sweetindia.in",
    "requirement": "10,000 MT ICUMSA 45"
  },
  {
    "name": "Li Ming",
    "company": "China Sugar Imports",
    "country": "China",
    "city": "Beijing",
    "category": "SUGAR",
    "phone": "+861000002002",
    "email": "liming@chinasugar.cn",
    "requirement": "Monthly 15,000 MT sugar"
  },
  {
    "name": "Budi Santoso",
    "company": "Indonesia Sweet Co",
    "country": "Indonesia",
    "city": "Jakarta",
    "category": "SUGAR",
    "phone": "+622100002003",
    "email": "budi@indonesiasweet.id",
    "requirement": "ICUMSA 45 bulk orders"
  },
  {
    "name": "Kamal Hassan",
    "company": "Bangladesh Sugar Trading",
    "country": "Bangladesh",
    "city": "Dhaka",
    "category": "SUGAR",
    "phone": "+880100002004",
    "email": "kamal@bdsugar.bd",
    "requirement": "20,000 MT refined sugar"
  },
  {
    "name": "Ahmed Ali",
    "company": "Pakistan Sweet Imports",
    "country": "Pakistan",
    "city": "Karachi",
    "category": "SUGAR",
    "phone": "+923000002005",
    "email": "ahmed@paksweet.pk",
    "requirement": "Monthly sugar supply"
  },
  {
    "name": "Tan Wei",
    "company": "Malaysia Sugar Corp",
    "country": "Malaysia",
    "city": "Kuala Lumpur",
    "category": "SUGAR",
    "phone": "+601000002006",
    "email": "tanwei@mysugar.my",
    "requirement": "12,000 MT ICUMSA 45"
  },
  {
    "name": "Jose Santos",
    "company": "Philippines Sugar Trading",
    "country": "Philippines",
    "city": "Manila",
    "category": "SUGAR",
    "phone": "+639000002007",
    "email": "jose@phsugar.ph",
    "requirement": "Bulk refined sugar"
  },
  {
    "name": "Tran Van",
    "company": "Vietnam Sugar Imports",
    "country": "Vietnam",
    "city": "Hanoi",
    "category": "SUGAR",
    "phone": "+849000002008",
    "email": "tran@vnsugar.vn",
    "requirement": "15,000 MT sugar monthly"
  },
  {
    "name": "Somchai Wong",
    "company": "Thailand Sweet Trading",
    "country": "Thailand",
    "city": "Bangkok",
    "category": "SUGAR",
    "phone": "+668000002009",
    "email": "somchai@thaisweet.th",
    "requirement": "ICUMSA 45 contract"
  },
  {
    "name": "Priya Sharma",
    "company": "Delhi Sugar Merchants",
    "country": "India",
    "city": "Delhi",
    "category": "SUGAR",
    "phone": "+911100002010",
    "email": "priya@delhisugar.in",
    "requirement": "8,000 MT refined sugar"
  },
  {
    "name": "Wang Chen",
    "company": "Shanghai Sweet Imports",
    "country": "China",
    "city": "Shanghai",
    "category": "SUGAR",
    "phone": "+862100002011",
    "email": "wangchen@shsugar.cn",
    "requirement": "Monthly 25,000 MT"
  },
  {
    "name": "Arjun Patel",
    "company": "Gujarat Sugar Trading",
    "country": "India",
    "city": "Ahmedabad",
    "category": "SUGAR",
    "phone": "+917900002012",
    "email": "arjun@gujaratsugar.in",
    "requirement": "Bulk ICUMSA 45"
  },
  {
    "name": "Dewi Lestari",
    "company": "Surabaya Sugar Co",
    "country": "Indonesia",
    "city": "Surabaya",
    "category": "SUGAR",
    "phone": "+623100002013",
    "email": "dewi@surabayasugar.id",
    "requirement": "10,000 MT sugar"
  },
  {
    "name": "Rashid Khan",
    "company": "Lahore Sweet Traders",
    "country": "Pakistan",
    "city": "Lahore",
    "category": "SUGAR",
    "phone": "+924200002014",
    "email": "rashid@lahoresweet.pk",
    "requirement": "Monthly refined sugar"
  },
  {
    "name": "Zhang Wei",
    "company": "Guangzhou Sugar Imports",
    "country": "China",
    "city": "Guangzhou",
    "category": "SUGAR",
    "phone": "+862000002015",
    "email": "zhangwei@gzsugar.cn",
    "requirement": "18,000 MT ICUMSA 45"
  },
  {
    "name": "Suresh Reddy",
    "company": "Hyderabad Sugar Corp",
    "country": "India",
    "city": "Hyderabad",
    "category": "SUGAR",
    "phone": "+914000002016",
    "email": "suresh@hydsugar.in",
    "requirement": "Quarterly sugar orders"
  },
  {
    "name": "Abdul Aziz",
    "company": "Chittagong Sugar Trading",
    "country": "Bangladesh",
    "city": "Chittagong",
    "category": "SUGAR",
    "phone": "+880180002017",
    "email": "aziz@ctgsugar.bd",
    "requirement": "15,000 MT refined"
  },
  {
    "name": "Lee Kuan",
    "company": "Singapore Sugar Imports",
    "country": "Singapore",
    "city": "Singapore",
    "category": "SUGAR",
    "phone": "+658000002018",
    "email": "leekuan@sgsugar.sg",
    "requirement": "Monthly ICUMSA 45"
  },
  {
    "name": "Ravi Kumar",
    "company": "Chennai Sugar Merchants",
    "country": "India",
    "city": "Chennai",
    "category": "SUGAR",
    "phone": "+914400002019",
    "email": "ravi@chennaisugar.in",
    "requirement": "12,000 MT sugar"
  },
  {
    "name": "Liu Yang",
    "company": "Shenzhen Sweet Trading",
    "country": "China",
    "city": "Shenzhen",
    "category": "SUGAR",
    "phone": "+867550002020",
    "email": "liuyang@szsweet.cn",
    "requirement": "Bulk sugar supply"
  },
  {
    "name": "Anwar Ibrahim",
    "company": "Penang Sugar Imports",
    "country": "Malaysia",
    "city": "Penang",
    "category": "SUGAR",
    "phone": "+604000002021",
    "email": "anwar@penangsugar.my",
    "requirement": "10,000 MT ICUMSA 45"
  },
  {
    "name": "Fernando Cruz",
    "company": "Cebu Sugar Trading",
    "country": "Philippines",
    "city": "Cebu",
    "category": "SUGAR",
    "phone": "+639200002022",
    "email": "fernando@cebusugar.ph",
    "requirement": "Monthly refined sugar"
  },
  {
    "name": "Pham Minh",
    "company": "Da Nang Sugar Co",
    "country": "Vietnam",
    "city": "Da Nang",
    "category": "SUGAR",
    "phone": "+849050002023",
    "email": "pham@dnsugar.vn",
    "requirement": "8,000 MT sugar"
  },
  {
    "name": "Niran Patel",
    "company": "Chiang Mai Sweet Imports",
    "country": "Thailand",
    "city": "Chiang Mai",
    "category": "SUGAR",
    "phone": "+665300002024",
    "email": "niran@cmsweet.th",
    "requirement": "ICUMSA 45 orders"
  },
  {
    "name": "Vijay Singh",
    "company": "Kolkata Sugar Trading",
    "country": "India",
    "city": "Kolkata",
    "category": "SUGAR",
    "phone": "+913300002025",
    "email": "vijay@kolkatasugar.in",
    "requirement": "20,000 MT refined"
  },
  {
    "name": "Zhao Min",
    "company": "Chengdu Sugar Imports",
    "country": "China",
    "city": "Chengdu",
    "category": "SUGAR",
    "phone": "+862800002026",
    "email": "zhaomin@cdsugar.cn",
    "requirement": "Monthly sugar supply"
  },
  {
    "name": "Sanjay Gupta",
    "company": "Pune Sugar Merchants",
    "country": "India",
    "city": "Pune",
    "category": "SUGAR",
    "phone": "+912000002027",
    "email": "sanjay@punesugar.in",
    "requirement": "15,000 MT ICUMSA 45"
  },
  {
    "name": "Hasan Mahmud",
    "company": "Sylhet Sugar Trading",
    "country": "Bangladesh",
    "city": "Sylhet",
    "category": "SUGAR",
    "phone": "+880170002028",
    "email": "hasan@sylhetsugar.bd",
    "requirement": "Bulk refined sugar"
  },
  {
    "name": "Andi Wijaya",
    "company": "Medan Sugar Imports",
    "country": "Indonesia",
    "city": "Medan",
    "category": "SUGAR",
    "phone": "+626100002029",
    "email": "andi@medansugar.id",
    "requirement": "12,000 MT sugar"
  },
  {
    "name": "Anil Mehta",
    "company": "Bangalore Sugar Corp",
    "country": "India",
    "city": "Bangalore",
    "category": "SUGAR",
    "phone": "+918000002030",
    "email": "anil@blrsugar.in",
    "requirement": "Monthly ICUMSA 45"
  },

  // OTHER Product Buyers (20)
  {
    "name": "Sarah Johnson",
    "company": "TechWorld USA",
    "country": "USA",
    "city": "New York",
    "category": "OTHER",
    "phone": "+12120003001",
    "email": "sarah@techworld.us",
    "requirement": "Electronics & Consumer Goods"
  },
  {
    "name": "Hans Mueller",
    "company": "German Machinery GmbH",
    "country": "Germany",
    "city": "Munich",
    "category": "OTHER",
    "phone": "+498900003002",
    "email": "hans@germanmach.de",
    "requirement": "Industrial Machinery"
  },
  {
    "name": "Emma Thompson",
    "company": "UK Textile Imports",
    "country": "UK",
    "city": "Manchester",
    "category": "OTHER",
    "phone": "+441610003003",
    "email": "emma@uktextile.uk",
    "requirement": "Textiles & Fabrics"
  },
  {
    "name": "Jean Dupont",
    "company": "France Chemical Trading",
    "country": "France",
    "city": "Lyon",
    "category": "OTHER",
    "phone": "+334000003004",
    "email": "jean@francechem.fr",
    "requirement": "Chemical Products"
  },
  {
    "name": "Marco Bianchi",
    "company": "Italia Auto Parts",
    "country": "Italy",
    "city": "Milan",
    "category": "OTHER",
    "phone": "+390200003005",
    "email": "marco@italiaauto.it",
    "requirement": "Automotive Components"
  },
  {
    "name": "Maria Garcia",
    "company": "Spain Construction Supplies",
    "country": "Spain",
    "city": "Barcelona",
    "category": "OTHER",
    "phone": "+349300003006",
    "email": "maria@spainconstruct.es",
    "requirement": "Building Materials"
  },
  {
    "name": "John Smith",
    "company": "Canada Medical Imports",
    "country": "Canada",
    "city": "Toronto",
    "category": "OTHER",
    "phone": "+14160003007",
    "email": "john@canadamed.ca",
    "requirement": "Medical Equipment"
  },
  {
    "name": "Sophie Martin",
    "company": "Australia Consumer Goods",
    "country": "Australia",
    "city": "Melbourne",
    "category": "OTHER",
    "phone": "+613000003008",
    "email": "sophie@ausgoods.au",
    "requirement": "Consumer Products"
  },
  {
    "name": "Hiroshi Yamamoto",
    "company": "Japan Electronics Corp",
    "country": "Japan",
    "city": "Osaka",
    "category": "OTHER",
    "phone": "+816000003009",
    "email": "hiroshi@jpelectronics.jp",
    "requirement": "Electronic Components"
  },
  {
    "name": "Park Min-ho",
    "company": "Korea Industrial Trading",
    "country": "South Korea",
    "city": "Busan",
    "category": "OTHER",
    "phone": "+825100003010",
    "email": "park@koreaind.kr",
    "requirement": "Industrial Equipment"
  },
  {
    "name": "Anna Kowalski",
    "company": "Poland Textile Imports",
    "country": "Poland",
    "city": "Warsaw",
    "category": "OTHER",
    "phone": "+482200003011",
    "email": "anna@polandtextile.pl",
    "requirement": "Textiles & Apparel"
  },
  {
    "name": "Carlos Rodriguez",
    "company": "Mexico Electronics Trading",
    "country": "Mexico",
    "city": "Guadalajara",
    "category": "OTHER",
    "phone": "+523300003012",
    "email": "carlos@mexelectronics.mx",
    "requirement": "Consumer Electronics"
  },
  {
    "name": "Lars Andersson",
    "company": "Sweden Machinery AB",
    "country": "Sweden",
    "city": "Gothenburg",
    "category": "OTHER",
    "phone": "+463100003013",
    "email": "lars@swedenmach.se",
    "requirement": "Heavy Machinery"
  },
  {
    "name": "Isabella Romano",
    "company": "Italy Fashion Imports",
    "country": "Italy",
    "city": "Florence",
    "category": "OTHER",
    "phone": "+390550003014",
    "email": "isabella@italiafashion.it",
    "requirement": "Fashion & Accessories"
  },
  {
    "name": "William Brown",
    "company": "USA Construction Trading",
    "country": "USA",
    "city": "Chicago",
    "category": "OTHER",
    "phone": "+13120003015",
    "email": "william@usaconstruct.us",
    "requirement": "Construction Materials"
  },
  {
    "name": "Olivia Davis",
    "company": "UK Medical Supplies",
    "country": "UK",
    "city": "Birmingham",
    "category": "OTHER",
    "phone": "+441210003016",
    "email": "olivia@ukmedical.uk",
    "requirement": "Medical Supplies"
  },
  {
    "name": "Pierre Lefevre",
    "company": "France Auto Imports",
    "country": "France",
    "city": "Marseille",
    "category": "OTHER",
    "phone": "+334910003017",
    "email": "pierre@franceauto.fr",
    "requirement": "Automotive Parts"
  },
  {
    "name": "Klaus Weber",
    "company": "Germany Chemical Corp",
    "country": "Germany",
    "city": "Frankfurt",
    "category": "OTHER",
    "phone": "+496900003018",
    "email": "klaus@germanchem.de",
    "requirement": "Chemical Products"
  },
  {
    "name": "Emily Wilson",
    "company": "Canada Industrial Supplies",
    "country": "Canada",
    "city": "Vancouver",
    "category": "OTHER",
    "phone": "+16040003019",
    "email": "emily@canadaind.ca",
    "requirement": "Industrial Supplies"
  },
  {
    "name": "Takeshi Sato",
    "company": "Japan Machinery Trading",
    "country": "Japan",
    "city": "Nagoya",
    "category": "OTHER",
    "phone": "+815200003020",
    "email": "takeshi@jpmachinery.jp",
    "requirement": "Precision Machinery"
  }
];

serve(async (req) => {
  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    
    const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false
      }
    });

    const createdBuyers = [];
    const errors = [];
    let profilesInserted = 0;
    let companiesInserted = 0;

    const categoryCounts = {
      EN590: 0,
      SUGAR: 0,
      OTHER: 0
    };

    for (const buyer of BUYER_DATA) {
      try {
        // Create auth user
        const { data: authData, error: authError } = await supabaseAdmin.auth.admin.createUser({
          email: buyer.email,
          password: `Buyer@${buyer.phone.slice(-6)}!`,
          email_confirm: true,
          user_metadata: {
            full_name: buyer.name,
            phone: buyer.phone
          }
        });

        if (authError) {
          errors.push({ buyer: buyer.name, error: authError.message });
          continue;
        }

        const userId = authData.user.id;

        // Insert profile
        const { error: profileError } = await supabaseAdmin
          .from("profiles")
          .insert({
            id: userId,
            full_name: buyer.name,
            email: buyer.email,
            phone: buyer.phone,
            country: buyer.country,
            city: buyer.city,
            user_type: "buyer",
            status: "active"
          });

        if (profileError) {
          errors.push({ buyer: buyer.name, error: `Profile: ${profileError.message}` });
          continue;
        }
        profilesInserted++;

        // Insert company
        const { error: companyError } = await supabaseAdmin
          .from("companies")
          .insert({
            user_id: userId,
            company_name: buyer.company,
            business_type: "buyer",
            country: buyer.country,
            city: buyer.city,
            contact_person_name: buyer.name,
            phone: buyer.phone,
            email: buyer.email,
            preferred_categories: buyer.category,
            annual_purchase_volume: buyer.requirement,
            verification_status: "verified"
          });

        if (companyError) {
          errors.push({ buyer: buyer.name, error: `Company: ${companyError.message}` });
          continue;
        }
        companiesInserted++;

        // Track category
        if (buyer.category === "EN590") categoryCounts.EN590++;
        else if (buyer.category === "SUGAR") categoryCounts.SUGAR++;
        else categoryCounts.OTHER++;

        createdBuyers.push({
          id: userId,
          name: buyer.name,
          email: buyer.email,
          phone: buyer.phone,
          company: buyer.company,
          category: buyer.category
        });

      } catch (err) {
        errors.push({ buyer: buyer.name, error: err.message });
      }
    }

    return new Response(
      JSON.stringify({
        status: "success",
        buyers_created: createdBuyers.map(b => b.id),
        profiles_inserted: profilesInserted,
        companies_inserted: companiesInserted,
        buyer_visibility: "phone and email visible to all users",
        categories_summary: categoryCounts,
        created_buyers_details: createdBuyers,
        errors: errors.length > 0 ? errors : undefined
      }),
      {
        headers: { "Content-Type": "application/json" },
        status: 200
      }
    );

  } catch (error) {
    return new Response(
      JSON.stringify({
        status: "error",
        error: error.message
      }),
      {
        headers: { "Content-Type": "application/json" },
        status: 500
      }
    );
  }
});
