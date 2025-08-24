// src/data/trade-shows.ts

// Shared hero image for all trade show detail pages
export const TRADE_SHOW_HERO_IMAGE = "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&h=800&fit=crop"

export interface TradeShow {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  startDate: string
  endDate: string
  location: string
  country: string
  city: string
  featuredImage: string
  category: string
  logo: string
  organizer?: string
  website?: string
  venue?: string
}

export interface TradeShowData {
  title: string
  subtitle: string
  description: {
    firstParagraph: string
    secondParagraph: string
  }
  shows: TradeShow[]
}

export const tradeShowData: TradeShowData = {
  title: "TOP TRADE SHOWS IN EUROPE",
  subtitle: "Discover premier trade shows and exhibitions across Europe. Connect with industry leaders, showcase your products, and expand your business network at these major events.",
  description: {
    firstParagraph: "Trade shows, exhibitions, and conferences in Europe serve as powerful platforms to elevate your brand recognition and propel your business toward greater success. These events provide unparalleled opportunities to engage directly with your target audience through meaningful face-to-face interactions, fostering valuable connections that can transform your business trajectory.",
    secondParagraph: "To help you unlock these opportunities, we've compiled a comprehensive directory of some of the most prominent trade shows across various industries in Europe. This curated list acts as a strategic branding and marketing resource, enabling you to identify and participate in events that align with your business goals. Discover the top trade show booth design in Europe and leverage these platforms to stay ahead of your competition, strengthen your market presence, and drive growth for your brand."
  },
  
  shows: [
    {
      id: "1",
      slug: "esc-congress-2025",
      title: "ESC Congress 2025",
      excerpt: "The European Society of Cardiology Congress is one of the world's largest and most influential cardiovascular medicine conferences.",
      logo: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=100&h=80&fit=crop",
      content: `
        <p>The <strong>European Society of Cardiology (ESC) Congress</strong> is recognized as one of the world's largest and most influential cardiovascular medicine conferences. This prestigious event brings together cardiologists, researchers, and healthcare professionals from around the globe to share groundbreaking research and innovations.</p>
        
        <p>The ESC Congress 2025 will feature cutting-edge research presentations, educational sessions, and networking opportunities that shape the future of cardiovascular medicine. It's an ideal platform for medical device companies, pharmaceutical firms, and healthcare technology providers.</p>
        
        <h2>Event Overview & Key Statistics</h2>
        <table>
          <thead>
            <tr>
              <th>Metric</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Expected Attendees</strong></td>
              <td>35,000+ Healthcare professionals</td>
            </tr>
            <tr>
              <td><strong>Exhibition Space</strong></td>
              <td>25,000 sqm of exhibition area</td>
            </tr>
            <tr>
              <td><strong>Countries Represented</strong></td>
              <td>150+ Countries worldwide</td>
            </tr>
            <tr>
              <td><strong>Scientific Sessions</strong></td>
              <td>500+ Educational sessions</td>
            </tr>
          </tbody>
        </table>
        
        <h2>Key Event Highlights</h2>
        <ul>
          <li><strong>Latest Cardiovascular Research:</strong> Groundbreaking studies and clinical trials presented by leading researchers</li>
          <li><strong>Interactive Workshops:</strong> Hands-on training sessions with cutting-edge medical devices and technologies</li>
          <li><strong>Medical Device Exhibitions:</strong> Showcase of innovative cardiovascular equipment and diagnostic tools</li>
          <li><strong>Networking Opportunities:</strong> Connect with global experts, decision-makers, and industry leaders</li>
          <li><strong>Clinical Guidelines:</strong> Updates and announcements on new treatment protocols and standards</li>
        </ul>
        
        <h2>Target Audience & Visitor Profile</h2>
        <p>The ESC Congress attracts a diverse range of healthcare professionals and industry stakeholders:</p>
        
        <h3>Primary Attendees</h3>
        <ul>
          <li><strong>Cardiologists & Cardiac Surgeons</strong> (45%)</li>
          <li><strong>General Practitioners & Internal Medicine</strong> (25%)</li>
          <li><strong>Nurses & Healthcare Technicians</strong> (15%)</li>
          <li><strong>Researchers & Academics</strong> (10%)</li>
          <li><strong>Industry Representatives</strong> (5%)</li>
        </ul>
        
        <h2>Exhibition Opportunities for Healthcare Companies</h2>
        <p>The ESC Congress offers <strong>unparalleled exhibition opportunities</strong> for companies in the cardiovascular healthcare sector. Our <a href="/custom-stands">custom exhibition stands</a> showcase medical devices, pharmaceutical products, and healthcare technologies effectively.</p>
        
        <h3>Exhibition Benefits</h3>
        <ol>
          <li><strong>Direct Access to Decision Makers:</strong> Meet hospital administrators, department heads, and procurement managers</li>
          <li><strong>Product Demonstrations:</strong> Showcase your latest innovations in a professional medical environment</li>
          <li><strong>Lead Generation:</strong> Connect with potential customers and distributors from 150+ countries</li>
          <li><strong>Brand Visibility:</strong> Enhance your company's presence in the global cardiovascular market</li>
          <li><strong>Competitive Intelligence:</strong> Stay informed about industry trends and competitor activities</li>
        </ol>
        
        <h2>Why Choose Professional Exhibition Stand Design?</h2>
        <p>At medical conferences like ESC Congress, <strong>professional presentation is crucial</strong>. Healthcare professionals expect:</p>
        
        <blockquote>
          "Clean, scientific designs that reflect the precision and reliability of medical equipment while creating an environment conducive to professional discussions and product demonstrations."
        </blockquote>
        
        <p>Our team specializes in creating <a href="/portfolio">medical exhibition stands</a> that incorporate:</p>
        
        <ul>
          <li>Interactive demonstration areas for medical equipment</li>
          <li>Private consultation spaces for sensitive discussions</li>
          <li>Professional lighting to highlight product features</li>
          <li>Compliance with medical industry regulations and standards</li>
        </ul>
        
        <h2>Investment & ROI Information</h2>
        <table>
          <thead>
            <tr>
              <th>Stand Size</th>
              <th>Estimated Investment</th>
              <th>Potential Leads</th>
              <th>ROI Timeline</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Small (9-18 sqm)</strong></td>
              <td>€15,000 - €25,000</td>
              <td>200-300 qualified leads</td>
              <td>6-12 months</td>
            </tr>
            <tr>
              <td><strong>Medium (36-54 sqm)</strong></td>
              <td>€35,000 - €55,000</td>
              <td>500-700 qualified leads</td>
              <td>4-8 months</td>
            </tr>
            <tr>
              <td><strong>Large (72+ sqm)</strong></td>
              <td>€75,000 - €120,000</td>
              <td>1000+ qualified leads</td>
              <td>3-6 months</td>
            </tr>
          </tbody>
        </table>
        
        <p><strong>Ready to make an impact at ESC Congress 2025?</strong> <a href="/contact-us">Contact our exhibition experts</a> today to discuss your requirements and secure your competitive advantage in the cardiovascular healthcare market.</p>
      `,
      startDate: "2025-08-29",
      endDate: "2025-09-01",
      location: "Madrid, Spain",
      country: "Spain",
      city: "Madrid",
      featuredImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",

      category: "Medical & Healthcare",
      organizer: "European Society of Cardiology",
      website: "https://www.escardio.org/Congresses-Events/ESC-Congress",
      venue: "ExCeL London"
    },
    
    {
      id: "2",
      slug: "micam-2025",
      title: "MICAM 2025",
      excerpt: "MICAM Milano is the international footwear exhibition that brings together the most important shoe manufacturers and buyers from around the world.",
      logo: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=100&h=80&fit=crop",
      content: `
        <p><strong>MICAM Milano</strong> stands as the premier international footwear exhibition, serving as the global epicenter where the most influential shoe manufacturers, innovative designers, and discerning buyers from around the world converge. This prestigious event showcases the latest trends, groundbreaking innovations, and exclusive collections that define the future of the footwear industry.</p>
        
        <p>Strategically held in <strong>Milan</strong>, the undisputed fashion capital of the world, MICAM 2025 represents the perfect synthesis of <em>Italian craftsmanship excellence</em>, international business acumen, and cutting-edge fashion innovation. The event magnetizes thousands of industry professionals from over 100 countries, solidifying its position as one of the most influential trade shows in the global fashion ecosystem.</p>
        
        <h2>Event Overview & Key Statistics</h2>
        <table>
          <thead>
            <tr>
              <th>Metric</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Expected Visitors</strong></td>
              <td>45,000+ Fashion industry professionals</td>
            </tr>
            <tr>
              <td><strong>Exhibiting Brands</strong></td>
              <td>1,200+ International footwear brands</td>
            </tr>
            <tr>
              <td><strong>Countries Represented</strong></td>
              <td>120+ Countries worldwide</td>
            </tr>
            <tr>
              <td><strong>Exhibition Space</strong></td>
              <td>55,000 sqm of premium display area</td>
            </tr>
            <tr>
              <td><strong>Business Volume</strong></td>
              <td>€2.5+ Billion in annual transactions</td>
            </tr>
          </tbody>
        </table>
        
        <h2>Key Event Highlights & Fashion Showcases</h2>
        <ul>
          <li><strong>Exclusive Designer Collections:</strong> World premieres of upcoming seasonal footwear lines from renowned fashion houses</li>
          <li><strong>Trend Forecasting Seminars:</strong> Expert-led sessions on emerging styles, materials, and consumer preferences</li>
          <li><strong>Sustainable Fashion Focus:</strong> Eco-friendly innovations, sustainable materials, and ethical manufacturing practices</li>
          <li><strong>Technology Integration:</strong> Smart footwear, 3D printing, and digital manufacturing solutions</li>
          <li><strong>International Buyer Programs:</strong> Facilitated meetings between manufacturers and global retail decision-makers</li>
          <li><strong>Fashion Shows & Runway Events:</strong> Live presentations of the latest collections in premium venues</li>
        </ul>
        
        <h2>Target Audience & Visitor Profile</h2>
        <p>MICAM attracts a sophisticated audience of fashion industry stakeholders and decision-makers:</p>
        
        <h3>Primary Attendees</h3>
        <ul>
          <li><strong>Fashion Buyers & Retail Managers</strong> (35%)</li>
          <li><strong>Footwear Manufacturers & Suppliers</strong> (25%)</li>
          <li><strong>Fashion Designers & Stylists</strong> (20%)</li>
          <li><strong>Distributors & Agents</strong> (15%)</li>
          <li><strong>Press & Fashion Media</strong> (5%)</li>
        </ul>
        
        <h2>Exhibition Stand Design Excellence for Fashion Industry</h2>
        <p>At MICAM, <strong>visual impact is paramount</strong>. The fashion industry demands exhibition stands that embody sophistication, style, and brand identity. Our <a href="/fashion-stands">fashion exhibition stands</a> are specifically designed to captivate the discerning fashion audience.</p>
        
        <h3>Essential Design Elements for Fashion Stands</h3>
        <ol>
          <li><strong>Premium Lighting Systems:</strong> Professional spotlighting and ambient lighting to showcase products perfectly</li>
          <li><strong>Elegant Product Displays:</strong> Sophisticated showcases, pedestals, and interactive product presentation areas</li>
          <li><strong>Brand Storytelling Spaces:</strong> Areas dedicated to communicating brand heritage, craftsmanship, and values</li>
          <li><strong>VIP Meeting Areas:</strong> Private, comfortable spaces for important buyer negotiations and partnerships</li>
          <li><strong>Instagram-Worthy Aesthetics:</strong> Photogenic backgrounds and installations for social media marketing</li>
        </ol>
        
        <blockquote>
          "In the fashion industry, your exhibition stand is your runway. Every element must reflect the elegance, innovation, and style that define your brand. First impressions at MICAM can make or break international partnerships."
        </blockquote>
        
        <h2>Business Opportunities & Market Access</h2>
        <p>MICAM provides <strong>unparalleled access to global fashion markets</strong>, facilitating connections that drive international growth and brand expansion.</p>
        
        <h3>Key Business Benefits</h3>
        <ul>
          <li><strong>Global Market Penetration:</strong> Access to buyers from emerging and established fashion markets</li>
          <li><strong>Trend Intelligence:</strong> First-hand insights into upcoming fashion movements and consumer preferences</li>
          <li><strong>Partnership Development:</strong> Strategic alliances with distributors, retailers, and fashion influencers</li>
          <li><strong>Brand Positioning:</strong> Establish your brand among industry leaders and fashion authorities</li>
          <li><strong>Media Exposure:</strong> Coverage by international fashion press and digital media platforms</li>
        </ul>
        
        <h2>Investment Analysis & ROI Projections</h2>
        <table>
          <thead>
            <tr>
              <th>Stand Category</th>
              <th>Investment Range</th>
              <th>Expected Contacts</th>
              <th>ROI Timeline</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Boutique Stand (18-36 sqm)</strong></td>
              <td>€25,000 - €45,000</td>
              <td>300-500 quality buyers</td>
              <td>4-8 months</td>
            </tr>
            <tr>
              <td><strong>Premium Stand (54-90 sqm)</strong></td>
              <td>€65,000 - €95,000</td>
              <td>800-1200 quality buyers</td>
              <td>3-6 months</td>
            </tr>
            <tr>
              <td><strong>Flagship Stand (120+ sqm)</strong></td>
              <td>€120,000 - €200,000</td>
              <td>1500+ premium buyers</td>
              <td>2-4 months</td>
            </tr>
          </tbody>
        </table>
        
        <h2>Milan: The Ultimate Fashion Destination</h2>
        <p><strong>Milan's prestigious fashion district</strong> provides the perfect backdrop for MICAM, enhancing the event's appeal and drawing high-caliber international visitors. The city's fashion heritage, luxury shopping districts, and world-renowned design culture create an inspiring environment for business and creativity.</p>
        
        <h3>Why Milan Matters for Fashion Brands</h3>
        <ul>
          <li>Home to luxury fashion houses like Prada, Versace, and Dolce & Gabbana</li>
          <li>Strategic location connecting European, Middle Eastern, and African markets</li>
          <li>Fashion Week timing alignment for maximum industry presence</li>
          <li>World-class hospitality and networking venues</li>
        </ul>
        
        <p><strong>Ready to make your mark at MICAM 2025?</strong> <a href="/contact-us">Contact our fashion exhibition specialists</a> today to create a stunning stand that captures the essence of your brand and attracts the fashion industry's most influential decision-makers.</p>
      `,
      startDate: "2025-09-08",
      endDate: "2025-09-11",
      location: "Milan, Italy",
      country: "Italy", 
      city: "Milan",
      featuredImage: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&h=600&fit=crop",

      category: "Fashion & Footwear",
      organizer: "Assocalzaturifici",
      website: "https://www.micamonline.com",
      venue: "Fiera Milano"
    },
    
    {
      id: "3",
      slug: "esmac-congress-2025",
      title: "ESMAC Congress 2025",
      excerpt: "The European Society for Movement Analysis in Adults and Children brings together professionals dedicated to improving movement analysis and treatment.",
      logo: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=100&h=80&fit=crop",
      content: `
        <p>The <strong>European Society for Movement Analysis in Adults and Children (ESMAC) Congress</strong> stands as the premier scientific gathering that unites global professionals dedicated to advancing the sophisticated field of movement analysis and revolutionizing treatment outcomes for patients with complex movement disorders.</p>
        
        <p>ESMAC Congress 2025 will showcase the most <em>cutting-edge research</em> in biomechanics, advanced gait analysis, innovative rehabilitation technology, and groundbreaking clinical applications. This internationally renowned congress attracts leading physiotherapists, biomechanics researchers, clinical specialists, and technology innovators from across Europe and the global scientific community.</p>
        
        <h2>Congress Overview & Scientific Impact</h2>
        <table>
          <thead>
            <tr>
              <th>Metric</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Expected Attendees</strong></td>
              <td>1,200+ Movement analysis professionals</td>
            </tr>
            <tr>
              <td><strong>Scientific Presentations</strong></td>
              <td>300+ Research papers and abstracts</td>
            </tr>
            <tr>
              <td><strong>Countries Represented</strong></td>
              <td>50+ Countries worldwide</td>
            </tr>
            <tr>
              <td><strong>Exhibition Space</strong></td>
              <td>2,500 sqm of specialized exhibition area</td>
            </tr>
            <tr>
              <td><strong>Workshop Sessions</strong></td>
              <td>45+ Hands-on technical workshops</td>
            </tr>
          </tbody>
        </table>
        
        <h2>Congress Scientific Highlights & Innovation Showcase</h2>
        <ul>
          <li><strong>Revolutionary Movement Analysis Research:</strong> Groundbreaking studies in 3D motion capture, force plate analysis, and EMG integration</li>
          <li><strong>Advanced Clinical Case Studies:</strong> Real-world applications demonstrating improved patient outcomes through technology</li>
          <li><strong>Interactive Technology Demonstrations:</strong> Live showcases of cutting-edge gait analysis systems and rehabilitation equipment</li>
          <li><strong>AI & Machine Learning Applications:</strong> Next-generation algorithms for movement pattern recognition and prediction</li>
          <li><strong>Pediatric Movement Analysis:</strong> Specialized sessions focusing on children's movement disorders and development</li>
          <li><strong>Rehabilitation Technology Integration:</strong> Seamless connectivity between analysis systems and treatment protocols</li>
        </ul>
        
        <h2>Target Audience & Professional Community</h2>
        <p>The ESMAC Congress attracts a highly specialized and influential community of healthcare and research professionals:</p>
        
        <h3>Primary Professional Segments</h3>
        <ul>
          <li><strong>Biomechanics Researchers & Scientists</strong> (30%)</li>
          <li><strong>Physical Therapists & Rehabilitation Specialists</strong> (25%)</li>
          <li><strong>Orthopedic Surgeons & Physicians</strong> (20%)</li>
          <li><strong>Movement Analysis Technicians</strong> (15%)</li>
          <li><strong>Healthcare Technology Developers</strong> (10%)</li>
        </ul>
        
        <h2>Exhibition Opportunities for Healthcare Technology Companies</h2>
        <p>The ESMAC Congress offers <strong>exceptional opportunities</strong> for companies specializing in movement analysis equipment, rehabilitation technology, and biomechanics software. Our <a href="/medical-technology-stands">medical technology exhibition stands</a> are specifically designed to showcase sophisticated scientific equipment effectively.</p>
        
        <h3>Critical Success Factors for Technology Exhibitors</h3>
        <ol>
          <li><strong>Live Equipment Demonstrations:</strong> Interactive showcases allowing hands-on experience with movement analysis systems</li>
          <li><strong>Scientific Credibility Display:</strong> Research data, validation studies, and clinical outcome evidence</li>
          <li><strong>Technical Precision Environment:</strong> Clean, professional spaces that reflect scientific accuracy and reliability</li>
          <li><strong>Expert Consultation Areas:</strong> Private spaces for detailed technical discussions and customization requirements</li>
          <li><strong>Educational Content Integration:</strong> Training materials, user guides, and certification programs</li>
        </ol>
        
        <blockquote>
          "In movement analysis, precision is everything. Your exhibition stand must demonstrate the same level of accuracy and attention to detail that your technology delivers in clinical settings. Scientists and clinicians need to see, touch, and experience the precision firsthand."
        </blockquote>
        
        <h2>Research Areas & Clinical Applications</h2>
        <p>ESMAC Congress covers a comprehensive range of <strong>specialized research domains</strong> and practical applications:</p>
        
        <h3>Core Research Focus Areas</h3>
        <ul>
          <li><strong>Gait Analysis & Locomotion:</strong> Walking patterns, running biomechanics, and mobility assessment</li>
          <li><strong>Neurological Movement Disorders:</strong> Parkinson's, cerebral palsy, stroke rehabilitation, and spinal cord injuries</li>
          <li><strong>Sports Biomechanics:</strong> Performance optimization, injury prevention, and athletic movement analysis</li>
          <li><strong>Pediatric Development:</strong> Children's movement patterns, developmental delays, and growth assessment</li>
          <li><strong>Prosthetics & Orthotics:</strong> Device fitting, adaptation analysis, and functional outcomes</li>
        </ul>
        
        <h2>Technology Categories & Market Opportunities</h2>
        <table>
          <thead>
            <tr>
              <th>Technology Category</th>
              <th>Market Size (EU)</th>
              <th>Target Customers</th>
              <th>Growth Rate</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>3D Motion Capture Systems</strong></td>
              <td>€450M annually</td>
              <td>Research labs, hospitals</td>
              <td>12% CAGR</td>
            </tr>
            <tr>
              <td><strong>Force Plate Technology</strong></td>
              <td>€180M annually</td>
              <td>Biomechanics labs, clinics</td>
              <td>8% CAGR</td>
            </tr>
            <tr>
              <td><strong>EMG Analysis Systems</strong></td>
              <td>€320M annually</td>
              <td>Rehabilitation centers</td>
              <td>15% CAGR</td>
            </tr>
            <tr>
              <td><strong>Wearable Sensors</strong></td>
              <td>€275M annually</td>
              <td>Home care, sports centers</td>
              <td>22% CAGR</td>
            </tr>
          </tbody>
        </table>
        
        <h2>Why Participate in ESMAC Congress?</h2>
        <p>ESMAC Congress offers a <strong>unique investment opportunity</strong> to establish your company at the forefront of movement analysis technology and clinical applications. The intimate scale and specialized focus ensure meaningful connections and substantive business discussions.</p>
        
        <h3>Strategic Business Benefits</h3>
        <ul>
          <li><strong>Direct Access to Decision Makers:</strong> Meet department heads, research directors, and procurement specialists</li>
          <li><strong>Technical Validation Opportunities:</strong> Receive feedback from leading experts in the field</li>
          <li><strong>Research Collaboration Potential:</strong> Partner with leading universities and research institutions</li>
          <li><strong>European Market Entry:</strong> Establish presence in the growing European movement analysis market</li>
          <li><strong>Regulatory Insights:</strong> Stay current with European medical device regulations and standards</li>
        </ul>
        
        <h2>Copenhagen: Nordic Excellence in Healthcare Innovation</h2>
        <p><strong>Copenhagen's reputation as a healthcare innovation hub</strong> provides the ideal setting for ESMAC Congress. Denmark's leadership in medical technology, research excellence, and progressive healthcare policies create an inspiring environment for scientific advancement and business development.</p>
        
        <h3>Copenhagen's Strategic Advantages</h3>
        <ul>
          <li>Home to leading medical technology companies and research institutions</li>
          <li>Gateway to Scandinavian and Baltic healthcare markets</li>
          <li>Strong emphasis on evidence-based medicine and clinical research</li>
          <li>Excellent infrastructure and international accessibility</li>
        </ul>
        
        <p><strong>Ready to showcase your movement analysis innovations at ESMAC Congress 2025?</strong> <a href="/contact-us">Contact our medical technology exhibition specialists</a> today to create a professional, scientifically-focused stand that demonstrates your technology's precision and attracts the global movement analysis community.</p>
      `,
      startDate: "2025-09-12",
      endDate: "2025-09-16",
      location: "Copenhagen, Denmark",
      country: "Denmark",
      city: "Copenhagen",
      featuredImage: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",

      category: "Medical & Research",
      organizer: "European Society for Movement Analysis in Adults and Children",
      website: "https://www.esmac.org",
      venue: "Bella Center Copenhagen"
    }
  ]
}

// Helper functions
export const getTradeShows = (): TradeShow[] => {
  return tradeShowData.shows
}

export const getTradeShowBySlug = (slug: string): TradeShow | null => {
  return tradeShowData.shows.find(show => show.slug === slug) || null
}

export const getRelatedTradeShows = (currentSlug: string, limit: number = 2): TradeShow[] => {
  return tradeShowData.shows.filter(show => show.slug !== currentSlug).slice(0, limit)
}

export const getTradeShowsByCategory = (category: string): TradeShow[] => {
  return tradeShowData.shows.filter(show => show.category === category)
}

export const getUpcomingTradeShows = (limit?: number): TradeShow[] => {
  const now = new Date()
  const upcoming = tradeShowData.shows
    .filter(show => new Date(show.startDate) > now)
    .sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime())
  
  return limit ? upcoming.slice(0, limit) : upcoming
}