<?php
$stories_url = ($p=get_page_by_path('success-stories')) ? get_permalink($p) : home_url('/success-stories/');
$testimonials = [
  ['name'=>'Linda',    'age'=>51, 'cond'=>'IBS &amp; Low FODMAP',   'result'=>'6 weeks to feeling 100% better',       'quote'=>"In just 6 weeks following the FODMAP diet with Jackie's guidance, I felt 100% better. She gave me the confidence to reintroduce food groups I'd been avoiding for years."],
  ['name'=>'Jane',     'age'=>57, 'cond'=>'IBS',                     'result'=>'Long-term symptom improvement',         'quote'=>"The diet changes made a remarkable difference. Five months in, the benefits are long-term — not temporary. I wish I had found Jackie sooner."],
  ['name'=>'Elizabeth','age'=>57, 'cond'=>'IBS &amp; FODMAP',       'result'=>'Successfully completed FODMAP programme','quote'=>"Without Jackie's support, the low FODMAP diet would have been impossible to follow. She was always quick to help when I hit a wall."],
  ['name'=>'Victoria', 'age'=>36, 'cond'=>'IBS',                     'result'=>'Massive improvement in IBS symptoms',   'quote'=>"The service was excellent and professional. My IBS improved massively in a short period of time. Jackie's guidance was clear and supportive throughout."],
  ['name'=>'Bridget',  'age'=>69, 'cond'=>'IBS',                     'result'=>'Transformed quality of life',           'quote'=>"I felt like a completely different person after following Jackie's FODMAP recommendations. Friendly, efficient, and deeply knowledgeable."],
];
?>
<div style="display:flex;flex-direction:column;gap:0;margin-bottom:3rem;">
  <div style="display:flex;flex-direction:column;gap:1rem;margin-bottom:3rem;">
    <div style="display:flex;flex-direction:column;gap:0.5rem;">
      <div class="eyebrow" style="color:var(--eucalyptus)">Client Outcomes</div>
      <h2 class="colour-white">Real Results for Real People</h2>
    </div>
    <a href="<?php echo esc_url($stories_url); ?>" class="link-arrow" style="color:var(--eucalyptus);align-self:flex-start">
      All testimonials <?php echo jgw_icon('arrow-right'); ?>
    </a>
  </div>
</div>
<div class="grid-3">
  <?php foreach ( $testimonials as $t ) : ?>
  <div class="testimonial-card">
    <?php echo jgw_stars(); ?>
    <p class="testimonial-quote">&ldquo;<?php echo esc_html($t['quote']); ?>&rdquo;</p>
    <div class="testimonial-footer">
      <div class="testimonial-author">
        <div class="testimonial-avatar"><?php echo esc_html($t['name'][0]); ?></div>
        <div>
          <div class="testimonial-name"><?php echo esc_html($t['name']); ?><?php if($t['age']) echo ', '.$t['age']; ?></div>
          <div class="testimonial-cond"><?php echo $t['cond']; ?></div>
        </div>
      </div>
      <div class="testimonial-badge">&bull; <?php echo esc_html($t['result']); ?></div>
    </div>
  </div>
  <?php endforeach; ?>
</div>
