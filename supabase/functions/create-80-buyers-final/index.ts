import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";

const BUYER_DATA = [
  // EN590 Buyers (30)
  { name: "John Peterson", company: "BlueWave Energy Ltd", country: "UAE", city: "Dubai", category: "EN590", phone: "+971500001001", email: "john.p@bluewave.com", requirement: "Monthly 50,000 MT EN590" },
  { name: "Ahmed Khan", company: "Gulf Petro Trading", country: "Saudi Arabia", city: "Riyadh", category: "EN590", phone: "+966500001002", email: "ahmed@gulfpetro.com", requirement: "100,000 MT EN590 contract" },
  { name: "Michael Rodrigues", company: "TransFuel Corp", country: "Singapore", city: "Singapore", category: "EN590", phone: "+65670001003", email: "mike@transfuel.sg", requirement: "Trial 10,000 MT EN590" },
  { name: "Omar Hassan", company: "Desert Oil Imports", country: "UAE", city: "Abu Dhabi", category: "EN590", phone: "+971500001004", email: "omar@desertoil.ae", requirement: "12-month EN590 deal" },
  { name: "Victor Silva", company: "SouthTrade Commodities", country: "Brazil", city: "Rio de Janeiro", category: "EN590", phone: "+552100001005", email: "victor@southtrade.br", requirement: "20,000 MT EN590 monthly" },
  { name: "Raj Patel", company: "PetroMax Global", country: "India", city: "Mumbai", category: "EN590", phone: "+91990001006", email: "raj@petromax.in", requirement: "25,000 MT regular EN590" },
  { name: "Daniel Foster", company: "Global Oil Hub", country: "USA", city: "Houston", category: "EN590", phone: "+1713001007", email: "daniel@globaloilhub.us", requirement: "Spot + long-term EN590" },
  { name: "Ali Reza", company: "MiddleEast Fuels", country: "Qatar", city: "Doha", category: "EN590", phone: "+97450001008", email: "reza@mefuels.qa", requirement: "35,000 MT EN590" },
  { name: "Chen Wei", company: "AsiaFuel Imports", country: "China", city: "Shanghai", category: "EN590", phone: "+861300010009", email: "chenwei@asiafuel.cn", requirement: "Long term EN590 supply" },
  { name: "Mark Anderson", company: "Nordic Petroleum", country: "Sweden", city: "Stockholm", category: "EN590", phone: "+46100010010", email: "mark@nordicpet.se", requirement: "40,000 MT EN590" },
  { name: "David Brooks", company: "Oceanic Oil Traders", country: "USA", city: "Los Angeles", category: "EN590", phone: "+13230001011", email: "david@oceanicoil.us", requirement: "Spot EN590 orders" },
  { name: "Imran Shaikh", company: "FuelConnect India", country: "India", city: "Delhi", category: "EN590", phone: "+91981001012", email: "imran@fuelconnect.in", requirement: "Trial 5,000 MT EN590" },
  { name: "Samir Al-Farsi", company: "Oman Petro Services", country: "Oman", city: "Muscat", category: "EN590", phone: "+96870001013", email: "samir@omanpetro.om", requirement: "Bulk EN590 supply" },
  { name: "George Miller", company: "EuroTrade Petroleum", country: "Germany", city: "Berlin", category: "EN590", phone: "+49300010014", email: "george@eurotrade.de", requirement: "Annual EN590 contract" },
  { name: "Luis Ortega", company: "Latam Oil Partners", country: "Mexico", city: "Mexico City", category: "EN590", phone: "+52550001015", email: "luis@latamoil.mx", requirement: "Monthly recurring EN590" },
  { name: "Hassan Noor", company: "Arabian Energy", country: "UAE", city: "Sharjah", category: "EN590", phone: "+97150001016", email: "hassan@arabenergy.ae", requirement: "Spot EN590 cargo" },
  { name: "Kim Young", company: "Seoul Fuel Importers", country: "South Korea", city: "Seoul", category: "EN590", phone: "+82100001017", email: "kimy@seoulfuel.kr", requirement: "EN590 yearly" },
  { name: "Ibrahim Musa", company: "Nigeria Trade Oil", country: "Nigeria", city: "Lagos", category: "EN590", phone: "+23480001018", email: "ibrahim@ntoil.ng", requirement: "Bulk EN590 requirement" },
  { name: "Carlos Gomez", company: "Spain Petro Imports", country: "Spain", city: "Madrid", category: "EN590", phone: "+34910001019", email: "carlos@spainpetro.es", requirement: "30,000 MT EN590" },
  { name: "Yuki Tanaka", company: "Tokyo Energy Trading", country: "Japan", city: "Tokyo", category: "EN590", phone: "+81300001020", email: "yuki@tokyoenergy.jp", requirement: "Monthly EN590 supply" },
  { name: "Pierre Dubois", company: "Paris Petroleum", country: "France", city: "Paris", category: "EN590", phone: "+33100001021", email: "pierre@parispetro.fr", requirement: "EN590 bulk orders" },
  { name: "Marco Rossi", company: "Milano Fuel Imports", country: "Italy", city: "Milan", category: "EN590", phone: "+39020001022", email: "marco@milanofuel.it", requirement: "Regular EN590 shipments" },
  { name: "Khalid Al-Sabah", company: "Kuwait Oil Trading", country: "Kuwait", city: "Kuwait City", category: "EN590", phone: "+96550001023", email: "khalid@kuwaittrade.kw", requirement: "EN590 long-term" },
  { name: "James Wilson", company: "London Energy Partners", country: "UK", city: "London", category: "EN590", phone: "+44200001024", email: "james@londonenergy.uk", requirement: "Spot EN590 deals" },
  { name: "Nguyen Van", company: "Vietnam Fuel Corp", country: "Vietnam", city: "Ho Chi Minh", category: "EN590", phone: "+84900001025", email: "nguyen@vietnamfuel.vn", requirement: "EN590 monthly" },
  { name: "Abdullah Rahman", company: "Bahrain Petro", country: "Bahrain", city: "Manama", category: "EN590", phone: "+97330001026", email: "abdullah@bahrainpetro.bh", requirement: "EN590 supply" },
  { name: "Robert Smith", company: "Sydney Oil Traders", country: "Australia", city: "Sydney", category: "EN590", phone: "+61200001027", email: "robert@sydneyoil.au", requirement: "EN590 contracts" },
  { name: "Mohammed Ali", company: "Cairo Energy", country: "Egypt", city: "Cairo", category: "EN590", phone: "+20100001028", email: "mohammed@cairoenergy.eg", requirement: "EN590 bulk" },
  { name: "Andreas Schmidt", company: "Hamburg Fuel", country: "Germany", city: "Hamburg", category: "EN590", phone: "+49400001029", email: "andreas@hamburgfuel.de", requirement: "EN590 yearly" },
  { name: "Fatima Hassan", company: "Dubai Oil Partners", country: "UAE", city: "Dubai", category: "EN590", phone: "+97150001030", email: "fatima@dubaioil.ae", requirement: "EN590 spot" },

  // Sugar Buyers (30)
  { name: "Rajesh Kumar", company: "Sweet Trading India", country: "India", city: "Mumbai", category: "SUGAR", phone: "+91990002001", email: "rajesh@sweettrading.in", requirement: "10,000 MT ICUMSA 45" },
  { name: "Li Ming", company: "Sugar Imports China", country: "China", city: "Beijing", category: "SUGAR", phone: "+861300002002", email: "liming@sugarimports.cn", requirement: "20,000 MT Raw Sugar" },
  { name: "Budi Santoso", company: "Jakarta Sweet Co", country: "Indonesia", city: "Jakarta", category: "SUGAR", phone: "+62210002003", email: "budi@jakartasweet.id", requirement: "5,000 MT ICUMSA 45" },
  { name: "Rahman Ahmed", company: "Dhaka Sugar Trading", country: "Bangladesh", city: "Dhaka", category: "SUGAR", phone: "+88010002004", email: "rahman@dhakasugar.bd", requirement: "15,000 MT Sugar" },
  { name: "Imran Ali", company: "Pakistan Sweet Imports", country: "Pakistan", city: "Karachi", category: "SUGAR", phone: "+92210002005", email: "imran@paksweet.pk", requirement: "8,000 MT ICUMSA 45" },
  { name: "Tan Wei", company: "Malaysia Sugar Corp", country: "Malaysia", city: "Kuala Lumpur", category: "SUGAR", phone: "+60300002006", email: "tanwei@malaysugar.my", requirement: "12,000 MT Sugar" },
  { name: "Jose Santos", company: "Manila Sweet Trading", country: "Philippines", city: "Manila", category: "SUGAR", phone: "+63200002007", email: "jose@manilasweet.ph", requirement: "6,000 MT ICUMSA 45" },
  { name: "Tran Van", company: "Hanoi Sugar Imports", country: "Vietnam", city: "Hanoi", category: "SUGAR", phone: "+84240002008", email: "tran@hanoisugar.vn", requirement: "10,000 MT Raw Sugar" },
  { name: "Somchai Wong", company: "Bangkok Sweet Co", country: "Thailand", city: "Bangkok", category: "SUGAR", phone: "+66200002009", email: "somchai@bangkoksweet.th", requirement: "18,000 MT Sugar" },
  { name: "Kumar Singh", company: "Delhi Sugar Trading", country: "India", city: "Delhi", category: "SUGAR", phone: "+91110002010", email: "kumar@delhisugar.in", requirement: "25,000 MT ICUMSA 45" },
  { name: "Wang Chen", company: "Shanghai Sweet Imports", country: "China", city: "Shanghai", category: "SUGAR", phone: "+862100002011", email: "wangchen@shanghaisweet.cn", requirement: "30,000 MT Sugar" },
  { name: "Arif Rahman", company: "Surabaya Sugar Co", country: "Indonesia", city: "Surabaya", category: "SUGAR", phone: "+62310002012", email: "arif@surabayasugar.id", requirement: "7,000 MT ICUMSA 45" },
  { name: "Kamal Hossain", company: "Chittagong Sweet Trading", country: "Bangladesh", city: "Chittagong", category: "SUGAR", phone: "+88020002013", email: "kamal@chittagongsweet.bd", requirement: "9,000 MT Sugar" },
  { name: "Hassan Khan", company: "Lahore Sugar Imports", country: "Pakistan", city: "Lahore", category: "SUGAR", phone: "+92420002014", email: "hassan@lahoresugar.pk", requirement: "11,000 MT ICUMSA 45" },
  { name: "Lee Kuan", company: "Singapore Sweet Corp", country: "Singapore", city: "Singapore", category: "SUGAR", phone: "+65680002015", email: "leekuan@sgsweet.sg", requirement: "14,000 MT Sugar" },
  { name: "Ahmad Yusof", company: "Penang Sugar Trading", country: "Malaysia", city: "Penang", category: "SUGAR", phone: "+60400002016", email: "ahmad@penangsugar.my", requirement: "8,500 MT ICUMSA 45" },
  { name: "Pedro Cruz", company: "Cebu Sweet Imports", country: "Philippines", city: "Cebu", category: "SUGAR", phone: "+63320002017", email: "pedro@cebusweet.ph", requirement: "5,500 MT Sugar" },
  { name: "Nguyen Minh", company: "Saigon Sugar Co", country: "Vietnam", city: "Ho Chi Minh", category: "SUGAR", phone: "+84280002018", email: "nguyen@saigonsugar.vn", requirement: "13,000 MT ICUMSA 45" },
  { name: "Pong Chai", company: "Chiang Mai Sweet Trading", country: "Thailand", city: "Chiang Mai", category: "SUGAR", phone: "+66530002019", email: "pong@chiangmaisweet.th", requirement: "7,500 MT Sugar" },
  { name: "Vijay Sharma", company: "Bangalore Sugar Imports", country: "India", city: "Bangalore", category: "SUGAR", phone: "+91800002020", email: "vijay@bangaloresugar.in", requirement: "16,000 MT ICUMSA 45" },
  { name: "Zhang Wei", company: "Guangzhou Sweet Co", country: "China", city: "Guangzhou", category: "SUGAR", phone: "+862000002021", email: "zhangwei@guangzhousweet.cn", requirement: "22,000 MT Sugar" },
  { name: "Dewi Lestari", company: "Bandung Sugar Trading", country: "Indonesia", city: "Bandung", category: "SUGAR", phone: "+62220002022", email: "dewi@bandungsugar.id", requirement: "6,500 MT ICUMSA 45" },
  { name: "Rahim Uddin", company: "Sylhet Sweet Imports", country: "Bangladesh", city: "Sylhet", category: "SUGAR", phone: "+88030002023", email: "rahim@sylhetsweet.bd", requirement: "8,800 MT Sugar" },
  { name: "Tariq Mahmood", company: "Islamabad Sugar Co", country: "Pakistan", city: "Islamabad", category: "SUGAR", phone: "+92510002024", email: "tariq@islamabadsugar.pk", requirement: "10,500 MT ICUMSA 45" },
  { name: "Chong Wei", company: "Johor Sweet Trading", country: "Malaysia", city: "Johor Bahru", category: "SUGAR", phone: "+60700002025", email: "chongwei@johorsweet.my", requirement: "9,200 MT Sugar" },
  { name: "Maria Santos", company: "Davao Sugar Imports", country: "Philippines", city: "Davao", category: "SUGAR", phone: "+63820002026", email: "maria@davaosugar.ph", requirement: "4,800 MT ICUMSA 45" },
  { name: "Le Van", company: "Da Nang Sweet Co", country: "Vietnam", city: "Da Nang", category: "SUGAR", phone: "+84230002027", email: "levan@danangsweet.vn", requirement: "11,500 MT Sugar" },
  { name: "Suthep Pong", company: "Phuket Sugar Trading", country: "Thailand", city: "Phuket", category: "SUGAR", phone: "+66760002028", email: "suthep@phuketsweet.th", requirement: "6,800 MT ICUMSA 45" },
  { name: "Anil Gupta", company: "Chennai Sugar Imports", country: "India", city: "Chennai", category: "SUGAR", phone: "+91440002029", email: "anil@chennaisugar.in", requirement: "19,000 MT Sugar" },
  { name: "Liu Yang", company: "Shenzhen Sweet Co", country: "China", city: "Shenzhen", category: "SUGAR", phone: "+867550002030", email: "liuyang@shenzhensweet.cn", requirement: "28,000 MT ICUMSA 45" },

  // Other Product Buyers (20)
  { name: "Thomas Brown", company: "TechImport USA", country: "USA", city: "New York", category: "Electronics", phone: "+12120003001", email: "thomas@techimport.us", requirement: "Consumer electronics bulk" },
  { name: "Hans Mueller", company: "Berlin Machinery GmbH", country: "Germany", city: "Berlin", category: "Machinery", phone: "+49300003002", email: "hans@berlinmachinery.de", requirement: "Industrial machinery" },
  { name: "Emma Watson", company: "London Textiles Ltd", country: "UK", city: "London", category: "Textiles", phone: "+44200003003", email: "emma@londontextiles.uk", requirement: "Fabric and garments" },
  { name: "Jean Dupont", company: "Paris Chemicals SA", country: "France", city: "Paris", category: "Chemicals", phone: "+33100003004", email: "jean@parischemicals.fr", requirement: "Industrial chemicals" },
  { name: "Giuseppe Verdi", company: "Milano Auto Parts", country: "Italy", city: "Milan", category: "Automotive", phone: "+39020003005", email: "giuseppe@milanoauto.it", requirement: "Car parts and accessories" },
  { name: "Pablo Garcia", company: "Madrid Construction", country: "Spain", city: "Madrid", category: "Construction", phone: "+34910003006", email: "pablo@madridconstruction.es", requirement: "Building materials" },
  { name: "John MacDonald", company: "Toronto Medical Supplies", country: "Canada", city: "Toronto", category: "Medical", phone: "+14160003007", email: "john@torontomedical.ca", requirement: "Medical equipment" },
  { name: "Andrew Wilson", company: "Melbourne Consumer Goods", country: "Australia", city: "Melbourne", category: "Consumer Goods", phone: "+61390003008", email: "andrew@melbournegoods.au", requirement: "Household products" },
  { name: "Hiroshi Yamamoto", company: "Osaka Industrial", country: "Japan", city: "Osaka", category: "Industrial", phone: "+81660003009", email: "hiroshi@osakaindustrial.jp", requirement: "Industrial equipment" },
  { name: "Park Min-ho", company: "Busan Agricultural", country: "South Korea", city: "Busan", category: "Agricultural", phone: "+82510003010", email: "park@busanagri.kr", requirement: "Agricultural products" },
  { name: "Robert Johnson", company: "Chicago Electronics", country: "USA", city: "Chicago", category: "Electronics", phone: "+13120003011", email: "robert@chicagoelectronics.us", requirement: "Electronic components" },
  { name: "Klaus Schmidt", company: "Munich Machinery", country: "Germany", city: "Munich", category: "Machinery", phone: "+49890003012", email: "klaus@munichmachinery.de", requirement: "Manufacturing equipment" },
  { name: "Sophie Martin", company: "Lyon Textiles", country: "France", city: "Lyon", category: "Textiles", phone: "+33400003013", email: "sophie@lyontextiles.fr", requirement: "Fashion textiles" },
  { name: "Antonio Romano", company: "Rome Chemicals", country: "Italy", city: "Rome", category: "Chemicals", phone: "+39060003014", email: "antonio@romechemicals.it", requirement: "Specialty chemicals" },
  { name: "David Lee", company: "Vancouver Auto", country: "Canada", city: "Vancouver", category: "Automotive", phone: "+16040003015", email: "david@vancouverauto.ca", requirement: "Automotive supplies" },
  { name: "Maria Rodriguez", company: "Barcelona Construction", country: "Spain", city: "Barcelona", category: "Construction", phone: "+34930003016", email: "maria@barcelonaconstruction.es", requirement: "Construction tools" },
  { name: "Wojciech Kowalski", company: "Warsaw Industrial", country: "Poland", city: "Warsaw", category: "Industrial", phone: "+48220003017", email: "wojciech@warsawindustrial.pl", requirement: "Industrial supplies" },
  { name: "Carlos Hernandez", company: "Monterrey Electronics", country: "Mexico", city: "Monterrey", category: "Electronics", phone: "+52810003018", email: "carlos@monterreyelectronics.mx", requirement: "Electronics wholesale" },
  { name: "Erik Andersson", company: "Stockholm Machinery", country: "Sweden", city: "Stockholm", category: "Machinery", phone: "+46800003019", email: "erik@stockholmmachinery.se", requirement: "Heavy machinery" },
  { name: "Sarah Thompson", company: "Sydney Medical", country: "Australia", city: "Sydney", category: "Medical", phone: "+61200003020", email: "sarah@sydneymedical.au", requirement: "Medical devices" }
];

serve(async (req) => {
  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);

    const authUsersCreated = [];
    let profilesCreated = 0;
    let companiesCreated = 0;
    const errors = [];

    for (const buyer of BUYER_DATA) {
      try {
        // Create Supabase Auth user
        const { data: authData, error: authError } = await supabaseAdmin.auth.admin.createUser({
          email: buyer.email,
          password: `Buyer@${Math.random().toString(36).slice(-8)}#2024`,
          email_confirm: true,
          user_metadata: {
            full_name: buyer.name,
            phone: buyer.phone
          }
        });

        if (authError) {
          if (authError.message.includes("already registered")) {
            errors.push({ buyer: buyer.email, error: "Email already exists, skipped" });
            continue;
          }
          throw authError;
        }

        const userId = authData.user.id;
        authUsersCreated.push(userId);

        // Insert profile
        const { error: profileError } = await supabaseAdmin
          .from("profiles")
          .upsert({
            id: userId,
            full_name: buyer.name,
            email: buyer.email,
            phone: buyer.phone,
            user_type: "buyer",
            country: buyer.country,
            city: buyer.city,
            status: "active"
          });

        if (profileError) throw profileError;
        profilesCreated++;

        // Insert company
        const { error: companyError } = await supabaseAdmin
          .from("companies")
          .insert({
            user_id: userId,
            company_name: buyer.company,
            contact_person_name: buyer.name,
            business_type: "buyer",
            country: buyer.country,
            city: buyer.city,
            phone: buyer.phone,
            email: buyer.email,
            preferred_categories: buyer.category,
            annual_purchase_volume: buyer.requirement || "Not specified",
            verification_status: "verified"
          });

        if (companyError) throw companyError;
        companiesCreated++;

      } catch (error) {
        errors.push({ buyer: buyer.email, error: error.message });
      }
    }

    return new Response(
      JSON.stringify({
        status: "completed",
        total_buyers_processed: BUYER_DATA.length,
        total_profiles_created: profilesCreated,
        total_companies_created: companiesCreated,
        auth_users_created: authUsersCreated,
        errors: errors.length > 0 ? errors : undefined,
        message: "All buyers added successfully and visible to all users."
      }),
      { headers: { "Content-Type": "application/json" } }
    );

  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
});