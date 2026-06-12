<?php get_header(); ?>
<?php
$contact_url = ($p=get_page_by_path('contact')) ? get_permalink($p) : home_url('/contact/');
$services = [
  ['slug'=>'ibs-gut-health',        'icon'=>'activity',   'bg'=>'var(--sage-pale)',       'accent'=>'var(--sage)',        'title'=>'IBS &amp; Gut Health',              'tagline'=>'Calm your gut. Reclaim your life.',
   'desc'=>'Irritable Bowel Syndrome affects millions of people, yet so many suffer in silence without the right support. Jackie provides expert, personalised guidance to help you understand your triggers and find lasting relief.',
   'symptoms'=>['Bloating and abdominal pain','Unpredictable bowel habits','Food anxiety and restriction','Social impact and embarrassment'],
   'outcomes'=>['Significant reduction in bloating and pain','Understanding your personal food triggers','A sustainable, varied diet you enjoy','Confidence eating socially']],

  ['slug'=>'low-fodmap',            'icon'=>'leaf',       'bg'=>'#edf4ee',               'accent'=>'var(--eucalyptus)', 'title'=>'Low FODMAP Programme',              'tagline'=>'The right guidance makes all the difference.',
   'desc'=>'The Low FODMAP diet is one of the most effective evidence-based approaches for IBS — but it\'s complex and should never be undertaken alone. Jackie guides you through every phase safely and effectively.',
   'symptoms'=>['Failed previous dietary attempts','Confusing, conflicting advice online','Anxiety about the reintroduction phase','Not knowing which foods are safe'],
   'outcomes'=>['Successful FODMAP elimination phase','Systematic, confident food reintroduction','Personalised long-term eating plan','Freedom from unnecessary restriction']],

  ['slug'=>'type-1-diabetes',       'icon'=>'zap',        'bg'=>'var(--stone-pale)',     'accent'=>'var(--charcoal-mid)','title'=>'Type 1 Diabetes',                   'tagline'=>'Expert support for complex glucose management.',
   'desc'=>'Managing Type 1 diabetes through diet requires specialist knowledge. Jackie has extensive NHS experience working with people living with T1D, offering practical strategies that fit real life.',
   'symptoms'=>['Difficulty with glucose management','Carbohydrate counting challenges','Managing blood sugar around exercise','Hypo and hyper anxiety'],
   'outcomes'=>['Improved HbA1c and time-in-range','Confident carbohydrate management','Reduced fear of hypoglycaemia','More flexibility in food choices']],

  ['slug'=>'type-2-diabetes',       'icon'=>'trending-up','bg'=>'var(--terracotta-pale)','accent'=>'var(--terracotta)', 'title'=>'Type 2 Diabetes &amp; Prediabetes', 'tagline'=>'Real change is possible with the right support.',
   'desc'=>'A Type 2 or prediabetes diagnosis can feel overwhelming — but with the right dietetic guidance, many people achieve remarkable improvements in their blood glucose, energy, and overall health.',
   'symptoms'=>['Newly diagnosed and unsure where to start','Struggling to make sustainable changes','Conflicting information about carbohydrates','Weight management concerns'],
   'outcomes'=>['Improved blood glucose control','Sustainable dietary habits','Weight management if appropriate','Greater energy and wellbeing']],

  ['slug'=>'neuro-rehabilitation',  'icon'=>'brain',      'bg'=>'var(--stone-pale)',     'accent'=>'var(--charcoal-mid)','title'=>'Brain Injury Rehabilitation',       'tagline'=>'Expert dietetic support for brain injury recovery.',
   'desc'=>'Acquired brain injury — including stroke, traumatic brain injury, and post-surgical recovery — creates highly specific nutritional challenges that require specialist expertise.',
   'symptoms'=>['Swallowing difficulties (dysphagia) making safe eating a challenge','Significant weight loss or malnutrition risk during rehabilitation','Fatigue making meal preparation very difficult','Altered taste or smell affecting appetite'],
   'outcomes'=>['Nutritional status supported throughout recovery','Safe eating approaches for dysphagia','Weight and muscle mass managed for rehabilitation goals','Continuity of specialist dietetic care beyond NHS discharge']],

  ['slug'=>'glp1-weight-management','icon'=>'stethoscope','bg'=>'#edf4ee',               'accent'=>'var(--eucalyptus)', 'title'=>'GLP-1 Medication &amp; Weight Management','tagline'=>'Making the most of your medication through expert nutrition.',
   'desc'=>'GLP-1 medications such as semaglutide (Wegovy, Ozempic) and tirzepatide (Mounjaro) are increasingly prescribed — but medication alone is only part of the picture.',
   'symptoms'=>['Recently prescribed a GLP-1 medication and unsure how to adapt your diet','Struggling with nausea or reduced appetite','Concerned about muscle loss or nutritional adequacy','Wanting to maximise the results from treatment'],
   'outcomes'=>['Nutritional adequacy maintained on a reduced appetite','Muscle mass preserved through targeted protein guidance','Sustainable dietary habits beyond the course of treatment','Confidence navigating eating and everyday life']],

  ['slug'=>'lifestyle-nutrition',   'icon'=>'sun',        'bg'=>'var(--gold-pale)',      'accent'=>'var(--gold)',       'title'=>'Lifestyle Nutrition',               'tagline'=>'Build a healthier relationship with food.',
   'desc'=>'Not every nutrition goal is medical. Whether you want to eat better, manage your weight, improve your energy, or simply understand nutrition without the noise — Jackie offers expert, jargon-free guidance.',
   'symptoms'=>['Low energy and fatigue','Confused by conflicting nutrition advice','Emotional eating patterns','General health and prevention goals'],
   'outcomes'=>['Clearer, more confident food choices','Sustainable healthy habits','Improved relationship with food','Better energy and mood']],

  ['slug'=>'family-nutrition',      'icon'=>'users',      'bg'=>'var(--sage-pale)',      'accent'=>'var(--sage)',       'title'=>'Family Nutrition',                  'tagline'=>'Practical dietetic guidance for the whole family.',
   'desc'=>'Feeding a family is one of the most complex nutrition challenges there is. Jackie understands family life from the inside — offering realistic, practical guidance that works for busy households.',
   'symptoms'=>['Fussy eaters at mealtimes','Uncertainty about children\'s nutritional needs','Balancing different dietary requirements','Time pressure and convenience food reliance'],
   'outcomes'=>['Practical, achievable meal plans','Reduced mealtime stress','Children developing healthy relationships with food','Whole-family nutritional balance']],
];
?>

<section class="page-hero">
  <div class="container-narrow" style="text-align:center">
    <div class="eyebrow">Areas of Expertise</div>
    <h1>Specialist Support for Your Specific Needs</h1>
    <p class="lead" style="margin:0 auto 2rem">Whether you're managing a complex digestive condition, living with diabetes, or wanting expert dietetic guidance — Jackie provides specialist support tailored to you.</p>
    <a href="<?php echo esc_url($contact_url); ?>" class="btn btn-primary">Book a Free Discovery Call <?php echo jgw_icon('arrow-right'); ?></a>
  </div>
</section>

<section class="section-padding bg-white">
  <div class="container-wide">
    <div style="display:flex;flex-direction:column;gap:2rem">
      <?php foreach ($services as $s) :
        $page = get_page_by_path($s['slug']);
        $url  = $page ? get_permalink($page) : home_url('/services/');
      ?>
      <div class="service-row">
        <div class="service-row-left" style="background:<?php echo $s['bg']; ?>">
          <div class="service-row-icon" style="background:rgba(255,255,255,0.8)"><span style="color:<?php echo $s['accent']; ?>"><?php echo jgw_icon($s['icon']); ?></span></div>
          <h2 class="service-row-left"><?php echo $s['title']; ?></h2>
          <p class="service-row-tagline" style="color:<?php echo $s['accent']; ?>"><?php echo esc_html($s['tagline']); ?></p>
          <a href="<?php echo esc_url($url); ?>" class="link-arrow" style="color:<?php echo $s['accent']; ?>">Learn more <?php echo jgw_icon('arrow-right'); ?></a>
        </div>
        <div class="service-row-right">
          <p class="description"><?php echo esc_html($s['desc']); ?></p>
          <div class="service-cols">
            <div>
              <div class="service-list-heading">Common Concerns</div>
              <ul class="service-list">
                <?php foreach($s['symptoms'] as $sym) : ?>
                <li><span class="bullet" style="background:<?php echo $s['accent']; ?>"></span><?php echo esc_html($sym); ?></li>
                <?php endforeach; ?>
              </ul>
            </div>
            <div>
              <div class="service-list-heading">Typical Outcomes</div>
              <ul class="service-list">
                <?php foreach($s['outcomes'] as $out) : ?>
                <li><?php echo jgw_icon('check-circle'); ?><span style="color:var(--charcoal-mid)"><?php echo esc_html($out); ?></span></li>
                <?php endforeach; ?>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<?php get_template_part('template-parts/final-cta'); ?>
<?php get_footer(); ?>
