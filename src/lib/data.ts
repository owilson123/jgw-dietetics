// ── Services ──────────────────────────────────────────────────────────────────

export const services = [
  {
    slug: 'ibs-gut-health',
    title: 'IBS & Gut Health',
    shortTitle: 'IBS & Gut Health',
    icon: 'Activity',
    tagline: 'Calm your gut. Reclaim your life.',
    description:
      'Irritable Bowel Syndrome affects millions of people, yet so many suffer in silence without the right support. Jackie provides expert, personalised guidance to help you understand your triggers and find lasting relief.',
    symptoms: [
      'Bloating and abdominal pain',
      'Unpredictable bowel habits',
      'Food anxiety and restriction',
      'Social impact and embarrassment',
      'Fatigue and low energy',
    ],
    howHelps:
      'Jackie takes a thorough, evidence-based approach — beginning with a full dietary and symptom history to understand your unique picture. She uses validated assessment tools, dietary modification strategies, and the gold-standard low FODMAP protocol where appropriate.',
    outcomes: [
      'Significant reduction in bloating and pain',
      'Understanding your personal food triggers',
      'A sustainable, varied diet you enjoy',
      'Confidence eating socially',
      'Long-term symptom management skills',
    ],
    colour: 'sage',
  },
  {
    slug: 'low-fodmap',
    title: 'Low FODMAP Programme',
    shortTitle: 'Low FODMAP',
    icon: 'Leaf',
    tagline: 'The right guidance makes all the difference.',
    description:
      'The Low FODMAP diet is one of the most effective evidence-based approaches for IBS — but it\'s complex and should never be undertaken alone. Jackie guides you through every phase safely and effectively.',
    symptoms: [
      'Failed previous dietary attempts',
      'Confusing, conflicting advice online',
      'Anxiety about the reintroduction phase',
      'Not knowing which foods are safe',
      'Nutritional imbalance concerns',
    ],
    howHelps:
      'Jackie is one of the UK\'s most experienced Low FODMAP practitioners. She provides structured, phased guidance through elimination, reintroduction, and personalisation — ensuring you come out with a diet that\'s both symptom-free and nutritionally complete.',
    outcomes: [
      'Successful FODMAP elimination phase',
      'Systematic, confident food reintroduction',
      'Personalised long-term eating plan',
      'Freedom from unnecessary restriction',
      'Evidence-based skills for life',
    ],
    colour: 'eucalyptus',
  },
  {
    slug: 'type-1-diabetes',
    title: 'Type 1 Diabetes',
    shortTitle: 'Type 1 Diabetes',
    icon: 'Zap',
    tagline: 'Expert support for complex glucose management.',
    description:
      'Managing Type 1 diabetes through diet requires specialist knowledge. Jackie has extensive NHS experience working with people living with T1D, offering practical strategies that fit real life.',
    symptoms: [
      'Difficulty with glucose management',
      'Carbohydrate counting challenges',
      'Managing blood sugar around exercise',
      'Hypo and hyper anxiety',
      'Eating out and social situations',
    ],
    howHelps:
      'Jackie provides specialist dietetic support including carbohydrate counting education, insulin-to-carbohydrate ratio guidance, and strategies for managing blood glucose in everyday situations — including exercise, illness, and social events.',
    outcomes: [
      'Improved HbA1c and time-in-range',
      'Confident carbohydrate management',
      'Reduced fear of hypoglycaemia',
      'More flexibility in food choices',
      'Better quality of life',
    ],
    colour: 'stone',
  },
  {
    slug: 'type-2-diabetes',
    title: 'Type 2 Diabetes & Prediabetes',
    shortTitle: 'Type 2 Diabetes',
    icon: 'TrendingUp',
    tagline: 'Real change is possible with the right support.',
    description:
      'A Type 2 or prediabetes diagnosis can feel overwhelming — but with the right dietetic guidance, many people achieve remarkable improvements in their blood glucose, energy, and overall health.',
    symptoms: [
      'Newly diagnosed and unsure where to start',
      'Struggling to make sustainable changes',
      'Conflicting information about carbohydrates',
      'Weight management concerns',
      'Medication dependency concerns',
    ],
    howHelps:
      'Jackie provides practical, evidence-based guidance that goes beyond generic advice. She develops personalised meal plans, explains the impact of different foods on blood glucose, and supports sustainable lifestyle changes — without fads or unnecessary restriction.',
    outcomes: [
      'Improved blood glucose control',
      'Sustainable dietary habits',
      'Weight management if appropriate',
      'Reduced medication dependency in some cases',
      'Greater energy and wellbeing',
    ],
    colour: 'terracotta',
  },
  {
    slug: 'lifestyle-nutrition',
    title: 'Lifestyle Nutrition Coaching',
    shortTitle: 'Lifestyle Nutrition',
    icon: 'Sun',
    tagline: 'Build a healthier relationship with food.',
    description:
      'Not every nutrition goal is medical. Whether you want to eat better, manage your weight, improve your energy, or simply understand nutrition without the noise — Jackie offers expert, jargon-free guidance.',
    symptoms: [
      'Low energy and fatigue',
      'Confused by conflicting nutrition advice',
      'Emotional eating patterns',
      'Desire to eat more mindfully',
      'General health and prevention goals',
    ],
    howHelps:
      'Jackie takes a whole-person approach — looking at your lifestyle, habits, relationships with food, and practical constraints. She provides personalised strategies that are achievable, sustainable, and enjoyable, drawing on principles of mindful and intuitive eating.',
    outcomes: [
      'Clearer, more confident food choices',
      'Sustainable healthy habits',
      'Improved relationship with food',
      'Better energy and mood',
      'Long-term health investment',
    ],
    colour: 'gold',
  },
  {
    slug: 'family-nutrition',
    title: 'Family Nutrition',
    shortTitle: 'Family Nutrition',
    icon: 'Users',
    tagline: 'Practical nutrition for the whole family.',
    description:
      'Feeding a family is one of the most complex nutrition challenges there is. Jackie understands family life from the inside — offering realistic, practical guidance that works for busy households with varying tastes and needs.',
    symptoms: [
      'Fussy eaters at mealtimes',
      'Uncertainty about children\'s nutritional needs',
      'Balancing different dietary requirements',
      'Time pressure and convenience food reliance',
      'Feeding teenagers healthily',
    ],
    howHelps:
      'Jackie provides tailored dietetic support for the whole family — from meal planning and batch cooking strategies to understanding portion sizes, managing fussy eating, and ensuring everyone in the household gets what they need.',
    outcomes: [
      'Practical, achievable meal plans',
      'Reduced mealtime stress',
      'Children developing healthy relationships with food',
      'Whole-family nutritional balance',
      'Confidence in the kitchen',
    ],
    colour: 'sage',
  },
  {
    slug: 'neuro-rehabilitation',
    title: 'Neurological Rehabilitation',
    shortTitle: 'Neuro Rehab',
    icon: 'Brain',
    tagline: 'Specialist dietetic support across the neurological rehabilitation journey.',
    description:
      'Neurological conditions — including stroke, acquired brain injury, Parkinson\'s disease, multiple sclerosis, and spinal cord injury — place highly specific and often complex demands on nutrition. Jackie brings NHS-level specialist expertise to support patients through rehabilitation and beyond, filling a gap that many find acute when NHS inpatient support ends.',
    symptoms: [
      'Swallowing difficulties (dysphagia) affecting safe nutrition',
      'Unintended weight loss or malnutrition during rehabilitation',
      'Altered energy needs due to spasticity, paralysis, or fatigue',
      'Medication and food interactions (e.g. Parkinson\'s protein timing)',
      'Cognitive or physical difficulties with meal preparation',
      'Nutritional support following discharge from NHS neuro rehab',
    ],
    howHelps:
      'With over 30 years of NHS experience — including working within multidisciplinary rehabilitation teams — Jackie understands the full clinical picture that neurological conditions present. She provides individualised dietetic assessment and support covering nutritional adequacy, texture-modified dietary guidance for dysphagia, weight and muscle management, and the practical challenges of eating and cooking with a neurological condition. She also works closely with patients transitioning from inpatient NHS neuro rehab into the community, where ongoing specialist dietetic input is often difficult to access on the NHS but remains clinically essential.',
    outcomes: [
      'Nutritional status maintained or improved throughout rehabilitation',
      'Safe eating strategies for those with swallowing difficulties',
      'Weight and muscle mass managed appropriately for recovery',
      'Practical meal strategies adapted to physical and cognitive ability',
      'Continuity of specialist dietetic care post-NHS discharge',
      'Improved quality of life through evidence-based dietary support',
    ],
    colour: 'stone',
  },
  {
    slug: 'glp1-weight-management',
    title: 'GLP-1 Medication & Weight Management',
    shortTitle: 'GLP-1 Support',
    icon: 'Stethoscope',
    tagline: 'Making the most of your medication through expert nutrition.',
    description:
      'GLP-1 medications such as semaglutide (Wegovy, Ozempic) and tirzepatide (Mounjaro) are increasingly prescribed for weight management and Type 2 diabetes — but medication alone is only part of the picture. Specialist dietetic support is essential to protect muscle mass, manage nutritional intake on a reduced appetite, and build the habits that determine long-term outcomes.',
    symptoms: [
      'Recently prescribed a GLP-1 medication and unsure how to adapt your diet',
      'Struggling with nausea, reduced appetite, or food aversions on medication',
      'Concerned about muscle loss or nutritional adequacy',
      'Wanting to maximise and sustain the results from treatment',
      'Planning to transition off medication and maintain progress',
    ],
    howHelps:
      'With over 30 years of NHS experience — including extensive work in diabetes and weight management — Jackie provides evidence-based dietetic guidance tailored to people on GLP-1 therapies. She focuses on adequate protein intake, preserving lean muscle, managing the practical challenges of reduced appetite, and building a sustainable dietary pattern that supports your health well beyond the course of treatment. This is clinical dietetic care delivered with the same rigour and compassion she brings to every client.',
    outcomes: [
      'Nutritional adequacy maintained on a reduced appetite',
      'Muscle mass preserved through targeted protein guidance',
      'Reduced side-effect impact through informed food choices',
      'Sustainable dietary habits that outlast the medication',
      'Improved long-term weight management outcomes',
      'Confidence navigating eating, social occasions, and everyday life',
    ],
    colour: 'eucalyptus',
  },
]

// ── Testimonials ──────────────────────────────────────────────────────────────

export const testimonials = [
  {
    id: 1,
    name: 'Linda',
    age: 51,
    condition: 'IBS & Low FODMAP',
    quote:
      'In just 6 weeks following the FODMAP diet with Jackie\'s guidance, I felt 100% better. She gave me the confidence to reintroduce food groups I\'d been avoiding for years.',
    result: '6 weeks to feeling 100% better',
    featured: true,
  },
  {
    id: 2,
    name: 'Jane',
    age: 57,
    condition: 'IBS',
    quote:
      'The diet changes made a remarkable difference. Five months in, the benefits are long-term — not temporary. I wish I had found Jackie sooner.',
    result: 'Long-term symptom improvement',
    featured: true,
  },
  {
    id: 3,
    name: 'Elizabeth',
    age: 57,
    condition: 'IBS & FODMAP',
    quote:
      'Without Jackie\'s support, the low FODMAP diet would have been impossible to follow. She was always quick to help when I hit a wall.',
    result: 'Successfully completed FODMAP programme',
    featured: true,
  },
  {
    id: 4,
    name: 'Bridget',
    age: 69,
    condition: 'IBS',
    quote:
      'I felt like a completely different person after following Jackie\'s FODMAP recommendations. Friendly, efficient, and deeply knowledgeable.',
    result: 'Transformed quality of life',
    featured: false,
  },
  {
    id: 5,
    name: 'Victoria',
    age: 36,
    condition: 'IBS',
    quote:
      'The service was excellent and professional. My IBS improved massively in a short period of time. Jackie\'s guidance was clear and supportive throughout.',
    result: 'Massive improvement in IBS symptoms',
    featured: true,
  },
  {
    id: 6,
    name: 'Katrina',
    age: undefined,
    condition: 'Multiple Food Intolerances',
    quote:
      'An experienced and thoroughly caring dietitian. I have never felt healthier in my life. Jackie\'s thoroughness and compassion made all the difference.',
    result: 'Healthiest she has ever felt',
    featured: false,
  },
  {
    id: 7,
    name: 'Alastair',
    age: 32,
    condition: 'General Nutrition',
    quote:
      'Jackie\'s warmth made it very easy to discuss personal matters. The consultation gave me genuine confidence to make lasting dietary changes.',
    result: 'Confident lasting dietary changes',
    featured: false,
  },
  {
    id: 8,
    name: 'Sarah',
    age: 42,
    condition: 'Anaemia & Iron Management',
    quote:
      'Jackie is down-to-earth and friendly. She helped me identify the right iron-rich foods to maintain my levels — simple, practical, effective.',
    result: 'Iron levels successfully managed',
    featured: false,
  },
]

// ── Programmes & Pricing ──────────────────────────────────────────────────────

export const programmes = [
  {
    id: 'discovery',
    name: 'Free Discovery Call',
    tagline: 'The perfect starting point',
    price: 'Free',
    duration: '20 minutes',
    description:
      'A free 20-minute telephone consultation to discuss your health goals, answer your questions, and find out how Jackie can help.',
    includes: [
      'Free 20-minute telephone consultation',
      'Discussion of your health goals and concerns',
      'Overview of the most suitable service',
      'No obligation to book further',
    ],
    cta: 'Book Free Call',
    highlight: false,
    badge: null,
  },
  {
    id: 'basic-nutrition',
    name: 'Basic Nutrition Check',
    tagline: 'A thorough nutritional assessment',
    price: '£175',
    duration: '2 appointments',
    description:
      'Two appointments covering a full nutritional assessment and a follow-up review — with bespoke recommendations and personalised meal planning guidance.',
    includes: [
      'Initial 60-minute consultation',
      'One 30-minute review consultation',
      'Online or telephone delivery',
      'Food diary review',
      'Comprehensive assessment and bespoke recommendations',
      'Meal planning, meal ideas and recipes',
      'Advice on portions and food label reading',
      'Free email support between consultations',
    ],
    cta: 'Book Now',
    highlight: false,
    badge: null,
  },
  {
    id: 'ibs-programme',
    name: 'Intensive IBS Dietetic Coaching Programme',
    tagline: 'Specialist gut health support over 3–5 months',
    price: '£300',
    duration: '3 appointments · 3–5 months',
    description:
      'A structured IBS coaching programme with three appointments across 3–5 months, including nutritional interventions such as the Low FODMAP diet, personalised meal ideas, and a dedicated nutrition pack.',
    includes: [
      'Initial 60-minute consultation',
      'Two 45-minute review consultations',
      'Nutritional interventions (e.g. Low FODMAP, low lactose)',
      'Recommendations on probiotics',
      'Personalised Nutrition Pack with meal ideas and recipes',
      'Support over a 3–5 month period',
    ],
    cta: 'Start Programme',
    highlight: true,
    badge: 'Most Popular',
  },
  {
    id: 'lifestyle',
    name: 'Intensive 6–12 Week Lifestyle Nutrition Coaching',
    tagline: 'Comprehensive lifestyle dietetic support',
    price: '£450',
    duration: '6 appointments · 6–12 weeks',
    description:
      'An intensive coaching programme with an initial appointment and five review sessions every 1–2 weeks, supporting you with personalised goals, blood result interpretation, and ongoing dietetic guidance.',
    includes: [
      'Initial 60-minute appointment',
      'Five 30-minute review consultations (every 1–2 weeks)',
      'Personalised plan with achievable goals and targets',
      'Support with understanding and interpreting blood results',
      'Information handouts, recipe ideas and meal ideas',
      'Portion size guidance',
      'Free email support between reviews',
    ],
    cta: 'Start Programme',
    highlight: false,
    badge: null,
  },
  {
    id: 'maintenance',
    name: 'Maintenance Add-on Consult',
    tagline: 'Keep your progress on track',
    price: '£70',
    duration: 'Per session',
    description:
      'Individual follow-up sessions to review progress, troubleshoot challenges, and keep your nutrition plan working for you.',
    includes: [
      'Single follow-up consultation',
      'Progress review and plan adjustment',
      'Updated bespoke recommendations',
    ],
    cta: 'Book Session',
    highlight: false,
    badge: null,
  },
  {
    id: 'supermarket',
    name: 'Supermarket Shopping Tour',
    tagline: 'Expert guidance in the aisles',
    price: '£100',
    duration: '1:1 tour',
    description:
      'A one-to-one guided tour of your local supermarket with Jackie — learning how to read labels, choose the right products, and shop with confidence.',
    includes: [
      '1:1 tour of your local supermarket',
      'Label reading and product selection guidance',
      'Personalised shopping strategies',
    ],
    cta: 'Book Tour',
    highlight: false,
    badge: 'Unique Service',
  },
  {
    id: 'meal-plan',
    name: 'One Week Personalised Meal Plan',
    tagline: 'A full week of meals tailored to you',
    price: '£250',
    duration: 'Delivered document',
    description:
      'A Monday to Sunday meal plan, individually tailored to you and your family — complete with recipes.',
    includes: [
      'Full Monday–Sunday meal plan',
      'Individualised to you and your family',
      'Complete with recipes',
    ],
    cta: 'Order Plan',
    highlight: false,
    badge: null,
  },
]

// ── FAQs ──────────────────────────────────────────────────────────────────────

export const faqs = [
  {
    q: 'What is a Registered Dietitian and how are they different from a nutritionist?',
    a: 'A Registered Dietitian (RD) is a protected title regulated by the Health and Care Professions Council (HCPC). Only those who have completed an approved degree and are registered with the HCPC can legally use this title. Dietitians are the only nutrition professionals qualified to provide medical nutrition therapy and treat clinical conditions. The title "nutritionist" is not legally protected — anyone can use it.',
  },
  {
    q: 'Do I need a GP referral to see Jackie?',
    a: 'No — you can self-refer directly. Simply get in touch via the contact form or phone, and we\'ll book you in. Jackie does work alongside GPs and consultants, but a referral is not required for private appointments.',
  },
  {
    q: 'Are consultations available online?',
    a: 'Yes. Jackie offers consultations via video call (Zoom or equivalent), telephone, and in-person. Online appointments are available including evenings and weekends to fit around your schedule.',
  },
  {
    q: 'How many sessions will I need?',
    a: 'This depends on your goals and health condition. Many clients see significant improvements within 6–8 weeks. For complex conditions like IBS or diabetes, a structured programme of 3–5 sessions tends to produce the best outcomes. Jackie will discuss this with you at your initial consultation.',
  },
  {
    q: 'Is Jackie registered and insured?',
    a: 'Yes. Jackie is registered with the Health and Care Professions Council (HCPC) and is a member of the British Dietetic Association (BDA). She holds full professional indemnity insurance.',
  },
  {
    q: 'What should I bring to my first appointment?',
    a: 'It helps to keep a 3–7 day food and symptom diary before your appointment. You may also want to bring a list of any medications and supplements, relevant blood test results, and a note of your main health concerns and goals.',
  },
  {
    q: 'Do you work with children and teenagers?',
    a: 'Yes. Jackie has experience working with children and families, and can support fussy eating, nutritional concerns, and family meal planning across all ages.',
  },
  {
    q: 'Can consultations be claimed on health insurance?',
    a: 'Many private health insurance policies cover dietitian consultations. Jackie recommends checking with your provider before booking. She can provide receipts and clinical notes for insurance claims.',
  },
  {
    q: 'Can you help with nutrition after a stroke or brain injury?',
    a: 'Yes. Jackie has extensive NHS experience supporting patients with neurological conditions including stroke, acquired brain injury, Parkinson\'s disease, multiple sclerosis, and spinal cord injury. She provides specialist dietetic support covering nutritional adequacy, dysphagia (swallowing difficulties), weight and muscle management, and the practical challenges of eating with a neurological condition. Many patients find that NHS dietetic input ends at discharge — Jackie\'s private practice can provide the continuity of specialist care that rehabilitation often still requires.',
  },
  {
    q: 'Can you support me if I\'m taking a GLP-1 medication like Ozempic, Wegovy or Mounjaro?',
    a: 'Yes — this is an area where specialist dietetic input makes a significant difference. GLP-1 medications reduce appetite substantially, which creates a real risk of inadequate protein intake and muscle loss if nutrition isn\'t managed carefully. Jackie provides evidence-based guidance on eating well within the constraints of reduced hunger, protecting lean muscle, managing common side effects through food choices, and — critically — building dietary habits that support your health in the long term, whether you remain on medication or not.',
  },
]

// ── How It Works ──────────────────────────────────────────────────────────────

export const steps = [
  {
    number: '01',
    title: 'Free Discovery Call',
    description:
      'Start with a free 15-minute call to discuss your health goals. No obligation — just an honest conversation about how Jackie can help.',
  },
  {
    number: '02',
    title: 'Comprehensive Assessment',
    description:
      'Your initial 60–90 minute consultation covers your full health history, dietary habits, lifestyle, and goals to build a complete picture.',
  },
  {
    number: '03',
    title: 'Personalised Plan',
    description:
      'Jackie creates a bespoke, evidence-based nutrition plan tailored specifically to your needs — practical and achievable for real life.',
  },
  {
    number: '04',
    title: 'Ongoing Support',
    description:
      'Regular follow-ups keep you on track, troubleshoot challenges, and refine your plan as you progress toward your goals.',
  },
]

// ── Trust indicators ──────────────────────────────────────────────────────────

export const trustIndicators = [
  { label: 'HCPC Registered', detail: 'Health & Care Professions Council' },
  { label: 'BDA Member', detail: 'British Dietetic Association' },
  { label: '30+ Years', detail: 'Clinical Experience' },
  { label: 'NHS Specialist', detail: 'Consultant-level expertise' },
  { label: 'Free Discovery Call', detail: 'No obligation consultation' },
]
