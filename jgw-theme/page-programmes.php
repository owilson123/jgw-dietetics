<?php get_header(); ?>
<?php
$contact_url = ($p=get_page_by_path('contact')) ? get_permalink($p) : home_url('/contact/');
$programmes = [
  ['name'=>'Free Discovery Call',       'tag'=>'The perfect starting point',         'price'=>'Free',     'dur'=>'20 minutes',              'desc'=>'A free 20-minute telephone consultation to discuss your health goals and find out how Jackie can help.','cta'=>'Book Free Call','featured'=>false,'badge'=>null,
   'inc'=>['Free 20-minute telephone consultation','Discussion of your health goals and concerns','Overview of the most suitable service','No obligation to book further']],
  ['name'=>'Basic Nutrition Check',     'tag'=>'A thorough dietetic assessment',     'price'=>'&pound;175','dur'=>'2 appointments',          'desc'=>'Two appointments covering a full assessment and follow-up review, with bespoke recommendations and personalised meal planning guidance.','cta'=>'Book Now','featured'=>false,'badge'=>null,
   'inc'=>['Initial 60-minute consultation','One 30-minute review consultation','Online or telephone delivery','Food diary review','Comprehensive assessment and bespoke recommendations','Advice on portions and food label reading','Free email support']],
  ['name'=>'Intensive IBS Dietetic Coaching','tag'=>'Specialist gut health support 3–5 months','price'=>'&pound;300','dur'=>'3 appointments &middot; 3&ndash;5 months','desc'=>'A structured IBS coaching programme with three appointments, including dietetic interventions such as the Low FODMAP diet.','cta'=>'Start Programme','featured'=>true,'badge'=>'Most Popular',
   'inc'=>['Initial 60-minute consultation','Two 45-minute review consultations','Dietetic interventions (e.g. Low FODMAP, low lactose)','Recommendations on probiotics','Personalised nutrition pack with meal ideas and recipes','Support over a 3–5 month period']],
  ['name'=>'Intensive 6&ndash;12 Week Lifestyle Coaching','tag'=>'Comprehensive lifestyle dietetic support','price'=>'&pound;450','dur'=>'6 appointments &middot; 6&ndash;12 weeks','desc'=>'An intensive coaching programme with an initial appointment and five review sessions every 1–2 weeks.','cta'=>'Start Programme','featured'=>false,'badge'=>null,
   'inc'=>['Initial 60-minute appointment','Five 30-minute review consultations (every 1–2 weeks)','Personalised plan with achievable goals','Support with interpreting blood results','Recipe ideas and meal ideas','Portion size guidance','Free email support between reviews']],
  ['name'=>'Maintenance Add-on Consult','tag'=>'Keep your progress on track',        'price'=>'&pound;70','dur'=>'Per session',              'desc'=>'Individual follow-up sessions to review progress, troubleshoot challenges, and keep your plan working for you.','cta'=>'Book Session','featured'=>false,'badge'=>null,
   'inc'=>['Single follow-up consultation','Progress review and plan adjustment','Updated bespoke recommendations']],
  ['name'=>'Supermarket Shopping Tour', 'tag'=>'Expert guidance in the aisles',       'price'=>'&pound;100','dur'=>'1:1 tour',               'desc'=>'A one-to-one guided tour of your local supermarket — learning how to read labels, choose the right products, and shop with confidence.','cta'=>'Book Tour','featured'=>false,'badge'=>'Unique Service',
   'inc'=>['1:1 tour of your local supermarket','Label reading and product selection guidance','Personalised shopping strategies']],
  ['name'=>'One Week Personalised Meal Plan','tag'=>'A full week of meals tailored to you','price'=>'&pound;250','dur'=>'Delivered document','desc'=>'A Monday to Sunday meal plan, individually tailored to you and your family — complete with recipes.','cta'=>'Order Plan','featured'=>false,'badge'=>null,
   'inc'=>['Full Monday–Sunday meal plan','Individualised to you and your family','Complete with recipes']],
];
?>

<section class="page-hero">
  <div class="container-narrow" style="text-align:center">
    <div class="eyebrow">Investment in Your Health</div>
    <h1>Transparent Pricing, No Surprises</h1>
    <p class="lead" style="margin:0 auto">From a free discovery call to a structured coaching programme — all options outlined clearly below.</p>
  </div>
</section>

<section class="section-padding bg-white">
  <div class="container-wide">
    <div class="pricing-grid">
      <?php foreach ($programmes as $p) : ?>
      <div class="pricing-card<?php echo $p['featured'] ? ' featured' : ''; ?>">
        <?php if ($p['badge']) : ?><div class="pricing-badge"><?php echo esc_html($p['badge']); ?></div><?php endif; ?>
        <div class="pricing-card-body">
          <div class="pricing-name"><?php echo $p['name']; ?></div>
          <div class="pricing-tag"><?php echo esc_html($p['tag']); ?></div>
          <div class="pricing-price"><?php echo $p['price']; ?></div>
          <div class="pricing-duration"><?php echo $p['dur']; ?></div>
          <div class="pricing-desc"><?php echo esc_html($p['desc']); ?></div>
          <ul class="pricing-includes">
            <?php foreach ($p['inc'] as $item) : ?>
            <li><?php echo jgw_icon('check'); ?><span><?php echo esc_html($item); ?></span></li>
            <?php endforeach; ?>
          </ul>
          <a href="<?php echo esc_url($contact_url); ?>" class="btn btn-primary mt-auto"><?php echo esc_html($p['cta']); ?></a>
        </div>
      </div>
      <?php endforeach; ?>
    </div>

    <!-- Notes -->
    <div style="margin-top:3rem">
      <div class="card">
        <h3 style="font-family:'Lora',serif;font-size:1.2rem;color:var(--charcoal);margin-bottom:1.25rem">A Few Things to Know</h3>
        <ul style="display:flex;flex-direction:column;gap:0.75rem">
          <?php
          $notes = [
            'All consultations are available via video call, telephone, or in person — including evenings and weekends.',
            'No GP referral required — you can self-refer directly.',
            'Many health insurance policies cover dietitian consultations — check with your provider.',
            'Not sure which option is right for you? The free discovery call is the best place to start.',
          ];
          foreach ($notes as $n) : ?>
          <li style="display:flex;align-items:flex-start;gap:0.6rem;font-size:0.875rem;color:var(--charcoal-mid)">
            <?php echo jgw_icon('check'); ?><span><?php echo esc_html($n); ?></span>
          </li>
          <?php endforeach; ?>
        </ul>
        <div style="margin-top:2rem;padding-top:1.5rem;border-top:1px solid var(--sage-pale);display:flex;flex-wrap:wrap;gap:1rem">
          <a href="<?php echo esc_url($contact_url); ?>" class="btn btn-primary">Book Free Discovery Call <?php echo jgw_icon('arrow-right'); ?></a>
          <a href="tel:07770769322" class="btn btn-outline"><?php echo jgw_icon('phone'); ?> 07770 769322</a>
        </div>
      </div>
    </div>
  </div>
</section>

<?php get_template_part('template-parts/final-cta'); ?>
<?php get_footer(); ?>
