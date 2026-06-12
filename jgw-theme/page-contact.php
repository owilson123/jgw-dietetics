<?php get_header(); ?>
<?php $disc_url = ($p=get_page_by_path('disclosure')) ? get_permalink($p) : home_url('/disclosure/'); ?>

<section class="page-hero">
  <div class="container-wide">
    <div class="page-hero-2col" style="align-items:start">

      <!-- Left info -->
      <div>
        <div class="eyebrow">Get in Touch</div>
        <h1>Let's Talk About Your Health Goals</h1>
        <p class="lead">The first step is a free 20-minute discovery call. No obligation — just a conversation about where you are and how Jackie can help.</p>

        <?php
        $details = [
          ['phone',   '07770 769322',             'tel:07770769322',              'Call or text'],
          ['mail',    'info@jgw-dietetics.co.uk',  'mailto:info@jgw-dietetics.co.uk','Email'],
          ['map-pin', 'Clevedon, North Somerset',  null,                           'South West England'],
          ['clock',   'Including evenings &amp; weekends', null,                   'Flexible availability'],
        ];
        foreach ($details as $d) : ?>
        <div class="contact-detail">
          <div class="contact-icon"><?php echo jgw_icon($d[0]); ?></div>
          <div>
            <?php if ($d[2]) : ?><a href="<?php echo esc_url($d[2]); ?>" class="contact-label"><?php echo $d[1]; ?></a>
            <?php else : ?><div class="contact-label"><?php echo $d[1]; ?></div><?php endif; ?>
            <div class="contact-sub"><?php echo $d[3]; ?></div>
          </div>
        </div>
        <?php endforeach; ?>

        <div class="expect-card" style="margin-top:1rem">
          <h3>What to expect from your discovery call:</h3>
          <ul class="expect-list">
            <?php foreach(['A warm, relaxed 20-minute conversation','Discussion of your health goals and concerns','An honest overview of how Jackie can help','Recommendation of the most suitable service','Absolutely no pressure to commit'] as $item) : ?>
            <li><?php echo jgw_icon('check-circle'); ?><?php echo esc_html($item); ?></li>
            <?php endforeach; ?>
          </ul>
        </div>
      </div>

      <!-- Right: form -->
      <div class="contact-form">
        <h2>Send an Enquiry</h2>
        <p class="form-sub">Jackie responds within 1–2 working days.</p>

        <?php if (function_exists('do_shortcode') && shortcode_exists('contact-form-7')) :
          // If Contact Form 7 is installed, replace 123 with the actual form ID
          echo do_shortcode('[contact-form-7 id="123" title="Contact Form"]');
        else : ?>

        <div id="form-notice" style="display:none;background:var(--sage-pale);border:1px solid var(--sage);border-radius:var(--radius);padding:1.25rem;margin-bottom:1rem;color:var(--sage);font-size:0.9rem"></div>

        <form id="jgw-contact-form">
          <div class="form-row">
            <div class="form-group"><label>First Name *</label><input type="text" name="first_name" required placeholder="Jane"></div>
            <div class="form-group"><label>Last Name *</label><input type="text" name="last_name" required placeholder="Smith"></div>
          </div>
          <div class="form-group"><label>Email Address *</label><input type="email" name="email" required placeholder="jane@example.com"></div>
          <div class="form-group"><label>Phone Number</label><input type="tel" name="phone" placeholder="07XXX XXXXXX"></div>
          <div class="form-group">
            <label>Area of Interest</label>
            <select name="service">
              <option value="">Select a service...</option>
              <?php foreach(['IBS &amp; Gut Health','Low FODMAP Programme','Type 1 Diabetes','Type 2 Diabetes / Prediabetes','Brain Injury Rehabilitation','GLP-1 Medication Support','Lifestyle Dietetic Coaching','Family Nutrition','Not sure yet'] as $s) : ?>
              <option value="<?php echo esc_attr(strip_tags($s)); ?>"><?php echo $s; ?></option>
              <?php endforeach; ?>
            </select>
          </div>
          <div class="form-group"><label>Tell Jackie about your goals</label><textarea name="message" placeholder="Please share a brief overview of your health goals or concerns..."></textarea></div>
          <div class="form-checkbox">
            <input type="checkbox" id="privacy" name="privacy" required>
            <label for="privacy">I understand that in compliance with GDPR, my contact details will be held for no longer than one year following our last correspondence or until I request deletion. They will not be shared with third parties without my permission. View the <a href="<?php echo esc_url($disc_url); ?>">Privacy Policy</a>.</label>
          </div>
          <button type="submit" class="btn btn-primary btn-submit">
            Send Enquiry <?php echo jgw_icon('arrow-right'); ?>
          </button>
        </form>

        <?php endif; ?>
      </div>

    </div>
  </div>
</section>

<!-- GDPR notice -->
<section style="padding:3rem 0;border-top:1px solid var(--sage-pale);background:#fff">
  <div class="container-wide">
    <div class="gdpr-notice">
      <div class="gdpr-header">
        <div class="gdpr-icon"><?php echo jgw_icon('shield'); ?></div>
        <h2>Data Protection &amp; Your Privacy</h2>
      </div>
      <div class="gdpr-grid">
        <div class="gdpr-item"><h3>How we use your data</h3><p>In compliance with GDPR, we will keep your contact details for no longer than one year following our last correspondence, or until you request us to delete them.</p></div>
        <div class="gdpr-item"><h3>Who your information is shared with</h3><p>We will not distribute, sell or lease your personal information to third parties unless we have your strict permission or are required by law to do so.</p></div>
        <div class="gdpr-item"><h3>Security measures</h3><p>We are committed to ensuring your information is secure. We have put in place encrypted electronic systems and managerial procedures to safeguard the information we collect.</p></div>
        <div class="gdpr-item"><h3>Your rights</h3><p>You may request to access, correct, or be deleted from our files at any time by contacting Jackie at <a href="mailto:info@jgw-dietetics.co.uk">info@jgw-dietetics.co.uk</a>. To unsubscribe from any communications, reply to any email asking to be removed. For further details see our <a href="<?php echo esc_url($disc_url); ?>">Privacy Policy</a>.</p></div>
      </div>
    </div>
  </div>
</section>

<?php get_template_part('template-parts/faq'); ?>

<?php get_footer(); ?>
