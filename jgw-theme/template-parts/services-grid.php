<?php
$services = [
  ['slug'=>'ibs-gut-health',        'icon'=>'activity',    'title'=>'IBS &amp; Gut Health',              'tagline'=>'Calm your gut. Reclaim your life.',                              'bg'=>'var(--sage-pale)',       'accent'=>'var(--sage)'],
  ['slug'=>'low-fodmap',            'icon'=>'leaf',        'title'=>'Low FODMAP Programme',              'tagline'=>'The right guidance makes all the difference.',                   'bg'=>'#edf4ee',               'accent'=>'var(--eucalyptus)'],
  ['slug'=>'type-1-diabetes',       'icon'=>'zap',         'title'=>'Type 1 Diabetes',                   'tagline'=>'Expert support for complex glucose management.',                  'bg'=>'var(--stone-pale)',     'accent'=>'var(--charcoal-mid)'],
  ['slug'=>'type-2-diabetes',       'icon'=>'trending-up', 'title'=>'Type 2 Diabetes &amp; Prediabetes', 'tagline'=>'Real change is possible with the right support.',                 'bg'=>'var(--terracotta-pale)','accent'=>'var(--terracotta)'],
  ['slug'=>'neuro-rehabilitation',  'icon'=>'brain',       'title'=>'Brain Injury Rehabilitation',       'tagline'=>'Expert dietetic support for brain injury recovery.',              'bg'=>'var(--stone-pale)',     'accent'=>'var(--charcoal-mid)'],
  ['slug'=>'glp1-weight-management','icon'=>'stethoscope', 'title'=>'GLP-1 &amp; Weight Management',     'tagline'=>'Making the most of your medication through expert nutrition.',    'bg'=>'#edf4ee',               'accent'=>'var(--eucalyptus)'],
  ['slug'=>'lifestyle-nutrition',   'icon'=>'sun',         'title'=>'Lifestyle Nutrition',               'tagline'=>'Build a healthier relationship with food.',                       'bg'=>'var(--gold-pale)',      'accent'=>'var(--gold)'],
  ['slug'=>'family-nutrition',      'icon'=>'users',       'title'=>'Family Nutrition',                  'tagline'=>'Practical dietetic guidance for the whole family.',              'bg'=>'var(--sage-pale)',      'accent'=>'var(--sage)'],
];
?>
<div class="grid-3" style="grid-template-columns: repeat(auto-fill, minmax(260px,1fr));">
  <?php foreach ( $services as $s ) :
    $page = get_page_by_path( $s['slug'] );
    $url  = $page ? get_permalink($page) : home_url('/services/');
  ?>
  <a href="<?php echo esc_url($url); ?>" class="service-card card-hover" style="background:<?php echo $s['bg']; ?>;border-color:<?php echo $s['accent']; ?>22;">
    <div class="service-icon" style="background:rgba(255,255,255,0.7);">
      <span style="color:<?php echo $s['accent']; ?>"><?php echo jgw_icon($s['icon']); ?></span>
    </div>
    <h3 style="color:var(--charcoal)"><?php echo $s['title']; ?></h3>
    <p><?php echo $s['tagline']; ?></p>
    <span class="service-card-link" style="color:<?php echo $s['accent']; ?>">
      Learn more <?php echo jgw_icon('arrow-right'); ?>
    </span>
  </a>
  <?php endforeach; ?>
</div>
