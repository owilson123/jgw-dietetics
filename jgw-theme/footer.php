<?php $contact = get_page_by_path('contact'); $contact_url = $contact ? get_permalink($contact) : home_url('/contact/'); ?>

<footer class="site-footer">
  <div class="container-wide">
    <div class="footer-grid">

      <!-- Brand -->
      <div class="footer-brand">
        <a href="<?php echo esc_url( home_url('/') ); ?>" style="text-decoration:none">
          <div class="logo-name">JGW Dietetics</div>
          <div class="logo-sub">Jackie Wilson RD</div>
        </a>
        <p>Evidence-based dietetic support for IBS, gut health, diabetes, and lifestyle change. 30+ years NHS and private practice experience.</p>
        <div class="footer-social">
          <a href="#" aria-label="Instagram"><?php echo jgw_icon('instagram'); ?></a>
          <a href="#" aria-label="Facebook"><?php echo jgw_icon('facebook'); ?></a>
          <a href="#" aria-label="LinkedIn"><?php echo jgw_icon('linkedin'); ?></a>
        </div>
      </div>

      <!-- Services -->
      <div class="footer-col">
        <h3>Services</h3>
        <ul>
          <?php
          $services = [
            'IBS &amp; Gut Health'        => 'ibs-gut-health',
            'Low FODMAP Programme'         => 'low-fodmap',
            'Type 1 Diabetes'              => 'type-1-diabetes',
            'Type 2 Diabetes'              => 'type-2-diabetes',
            'Lifestyle Nutrition'          => 'lifestyle-nutrition',
            'Family Nutrition'             => 'family-nutrition',
            'Brain Injury Rehabilitation'  => 'neuro-rehabilitation',
            'GLP-1 Support'                => 'glp1-weight-management',
          ];
          foreach ( $services as $label => $slug ) {
            $page = get_page_by_path( $slug );
            $url  = $page ? get_permalink( $page ) : home_url( '/services/' . $slug . '/' );
            echo '<li><a href="' . esc_url( $url ) . '">' . $label . '</a></li>';
          }
          ?>
        </ul>
      </div>

      <!-- Information -->
      <div class="footer-col">
        <h3>Information</h3>
        <ul>
          <?php
          $info = [
            'About Jackie'         => 'about',
            'Programmes &amp; Pricing' => 'programmes',
            'Success Stories'      => 'success-stories',
            'Disclosure &amp; Privacy' => 'disclosure',
            'Contact'              => 'contact',
          ];
          foreach ( $info as $label => $slug ) {
            $page = get_page_by_path( $slug );
            $url  = $page ? get_permalink( $page ) : home_url( '/' . $slug . '/' );
            echo '<li><a href="' . esc_url( $url ) . '">' . $label . '</a></li>';
          }
          ?>
        </ul>
      </div>

      <!-- Contact -->
      <div class="footer-col">
        <h3>Get in Touch</h3>
        <ul class="footer-contact">
          <li><?php echo jgw_icon('phone'); ?><a href="tel:07770769322">07770 769322</a></li>
          <li><?php echo jgw_icon('mail'); ?><a href="mailto:info@jgw-dietetics.co.uk">info@jgw-dietetics.co.uk</a></li>
          <li><?php echo jgw_icon('map-pin'); ?><span>Clevedon, North Somerset<br>South West England</span></li>
        </ul>
        <a href="<?php echo esc_url( $contact_url ); ?>" class="btn btn-primary btn-sm" style="margin-top:1rem">
          Book Free Discovery Call
        </a>
      </div>

    </div><!-- .footer-grid -->

    <div class="footer-bar">
      <p>&copy; <?php echo date('Y'); ?> JGW Dietetics. Jackie Wilson is registered with the HCPC and BDA.</p>
      <div class="footer-bar-links">
        <?php
        $disc = get_page_by_path('disclosure');
        $disc_url = $disc ? get_permalink($disc) : home_url('/disclosure/');
        ?>
        <a href="<?php echo esc_url( $disc_url ); ?>">Privacy Policy</a>
        <a href="<?php echo esc_url( $disc_url ); ?>">Disclosure</a>
      </div>
    </div>

  </div>
</footer>

<?php wp_footer(); ?>
</body>
</html>
