<?php
$prog_url = ($p=get_page_by_path('programmes')) ? get_permalink($p) : home_url('/programmes/');
$contact_url = ($p=get_page_by_path('contact')) ? get_permalink($p) : home_url('/contact/');
$snapshot = [
  ['id'=>'discovery','name'=>'Free Discovery Call','tag'=>'The perfect starting point','price'=>'Free','dur'=>'20 minutes','desc'=>'A free 20-minute telephone consultation to discuss your health goals and find out how Jackie can help.','includes'=>['Free 20-minute telephone consultation','Discussion of your health goals','Overview of the most suitable service','No obligation to book further'],'cta'=>'Book Free Call','featured'=>false,'badge'=>null],
  ['id'=>'basic','name'=>'Basic Nutrition Check','tag'=>'A thorough dietetic assessment','price'=>'&pound;175','dur'=>'2 appointments','desc'=>'Two appointments covering a full assessment and follow-up review, with bespoke recommendations and personalised meal planning guidance.','includes'=>['Initial 60-minute consultation','One 30-minute review consultation','Food diary review','Bespoke dietary recommendations','Free email support between consultations'],'cta'=>'Book Now','featured'=>false,'badge'=>null],
  ['id'=>'ibs','name'=>'Intensive IBS Dietetic Coaching','tag'=>'Specialist gut health support','price'=>'&pound;300','dur'=>'3 appointments &middot; 3&ndash;5 months','desc'=>'A structured IBS coaching programme including dietetic interventions such as the Low FODMAP diet, personalised meal ideas, and a dedicated nutrition pack.','includes'=>['Initial 60-minute consultation','Two 45-minute review consultations','Nutritional interventions (e.g. Low FODMAP)','Recommendations on probiotics','Personalised nutrition pack with meal ideas'],'cta'=>'Start Programme','featured'=>true,'badge'=>'Most Popular'],
];
?>
<div style="margin-bottom:3.5rem;">
  <div class="section-header-row">
    <div>
      <div class="eyebrow">Investment in Your Health</div>
      <h2>Transparent, Fair Pricing</h2>
      <p class="colour-mid" style="margin-top:0.5rem;max-width:36rem">From a free discovery call to a comprehensive coaching programme.</p>
    </div>
    <a href="<?php echo esc_url($prog_url); ?>" class="link-arrow">
      View all programmes <?php echo jgw_icon('arrow-right'); ?>
    </a>
  </div>
</div>
<div class="pricing-grid">
  <?php foreach ( $snapshot as $p ) : ?>
  <div class="pricing-card<?php echo $p['featured'] ? ' featured' : ''; ?>">
    <?php if ( $p['badge'] ) : ?>
    <div class="pricing-badge"><?php echo esc_html($p['badge']); ?></div>
    <?php endif; ?>
    <div class="pricing-card-body">
      <div class="pricing-name"><?php echo $p['name']; ?></div>
      <div class="pricing-tag"><?php echo $p['tag']; ?></div>
      <div class="pricing-price"><?php echo $p['price']; ?></div>
      <div class="pricing-duration"><?php echo $p['dur']; ?></div>
      <div class="pricing-desc"><?php echo esc_html($p['desc']); ?></div>
      <ul class="pricing-includes">
        <?php foreach ( $p['includes'] as $item ) : ?>
        <li><?php echo jgw_icon('check'); ?><span><?php echo esc_html($item); ?></span></li>
        <?php endforeach; ?>
      </ul>
      <a href="<?php echo esc_url($contact_url); ?>" class="btn btn-primary mt-auto"><?php echo esc_html($p['cta']); ?></a>
    </div>
  </div>
  <?php endforeach; ?>
</div>
