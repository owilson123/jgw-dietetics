<?php get_header(); ?>
<?php
$contact_url = ($p=get_page_by_path('contact')) ? get_permalink($p) : home_url('/contact/');
$testimonials = [
  ['name'=>'Linda',    'age'=>51,'cond'=>'IBS &amp; Low FODMAP',   'result'=>'6 weeks to feeling 100% better',        'quote'=>"In just 6 weeks following the FODMAP diet with Jackie's guidance, I felt 100% better. She gave me the confidence to reintroduce food groups I'd been avoiding for years."],
  ['name'=>'Jane',     'age'=>57,'cond'=>'IBS',                    'result'=>'Long-term symptom improvement',          'quote'=>"The diet changes made a remarkable difference. Five months in, the benefits are long-term — not temporary. I wish I had found Jackie sooner."],
  ['name'=>'Elizabeth','age'=>57,'cond'=>'IBS &amp; FODMAP',       'result'=>'Successfully completed FODMAP programme','quote'=>"Without Jackie's support, the low FODMAP diet would have been impossible to follow. She was always quick to help when I hit a wall."],
  ['name'=>'Bridget',  'age'=>69,'cond'=>'IBS',                    'result'=>'Transformed quality of life',            'quote'=>"I felt like a completely different person after following Jackie's FODMAP recommendations. Friendly, efficient, and deeply knowledgeable."],
  ['name'=>'Victoria', 'age'=>36,'cond'=>'IBS',                    'result'=>'Massive improvement in IBS symptoms',   'quote'=>"The service was excellent and professional. My IBS improved massively in a short period of time. Jackie's guidance was clear and supportive throughout."],
  ['name'=>'Katrina',  'age'=>0, 'cond'=>'Multiple Food Intolerances','result'=>'Healthiest she has ever felt',        'quote'=>"An experienced and thoroughly caring dietitian. I have never felt healthier in my life. Jackie's thoroughness and compassion made all the difference."],
  ['name'=>'Alastair', 'age'=>32,'cond'=>'General Nutrition',      'result'=>'Confident lasting dietary changes',     'quote'=>"Jackie's warmth made it very easy to discuss personal matters. The consultation gave me genuine confidence to make lasting dietary changes."],
  ['name'=>'Sarah',    'age'=>42,'cond'=>'Anaemia &amp; Iron Management','result'=>'Iron levels successfully managed', 'quote'=>"Jackie is down-to-earth and friendly. She helped me identify the right iron-rich foods to maintain my levels — simple, practical, effective."],
];
?>

<section class="page-hero">
  <div class="container-narrow" style="text-align:center">
    <div class="eyebrow">Client Testimonials</div>
    <h1>Real Results for Real People</h1>
    <p class="lead" style="margin:0 auto">The greatest measure of Jackie's work is in the lives of the people she's helped.</p>
  </div>
</section>

<section class="stats-bar">
  <div class="container-wide">
    <div class="stats-bar-grid">
      <div><div class="stat-big">30+</div><div class="stat-lbl">Years helping clients</div></div>
      <div><div class="stat-big">100%</div><div class="stat-lbl">Would recommend Jackie</div></div>
      <div><div class="stat-big">12+</div><div class="stat-lbl">Five-star testimonials</div></div>
    </div>
  </div>
</section>

<section class="section-padding bg-white">
  <div class="container-wide">
    <div class="grid-3">
      <?php foreach ($testimonials as $t) : ?>
      <div class="testimonial-full-card">
        <div class="testimonial-result-badge">&bull; <?php echo esc_html($t['result']); ?></div>
        <div class="stars"><?php for($i=0;$i<5;$i++) echo jgw_icon('star'); ?></div>
        <blockquote>&ldquo;<?php echo esc_html($t['quote']); ?>&rdquo;</blockquote>
        <div class="author">
          <div class="author-avatar"><?php echo esc_html($t['name'][0]); ?></div>
          <div>
            <div class="author-name"><?php echo esc_html($t['name']); ?><?php if($t['age']) echo ', '.intval($t['age']); ?></div>
            <div class="author-cond"><?php echo $t['cond']; ?></div>
          </div>
        </div>
      </div>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<section style="background:var(--sage-pale);padding:4rem 0">
  <div class="container-narrow" style="text-align:center">
    <h2 style="margin-bottom:1rem">Your Story Could Be Next</h2>
    <p class="colour-mid" style="margin-bottom:2rem;font-size:1.05rem">Hundreds of people have improved their health and quality of life with Jackie's support. Take the first step today.</p>
    <a href="<?php echo esc_url($contact_url); ?>" class="btn btn-primary">Book a Free Discovery Call <?php echo jgw_icon('arrow-right'); ?></a>
  </div>
</section>

<?php get_template_part('template-parts/final-cta'); ?>
<?php get_footer(); ?>
