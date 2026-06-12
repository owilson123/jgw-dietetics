<?php get_header(); ?>
<main>
  <section class="section-padding" style="text-align:center;background:var(--off-white)">
    <div class="container-narrow">
      <div style="font-family:'Lora',serif;font-size:5rem;font-weight:700;color:var(--sage-pale);line-height:1;margin-bottom:1.5rem">404</div>
      <h1 style="margin-bottom:1rem">Page Not Found</h1>
      <p class="colour-mid" style="margin-bottom:2rem">Sorry, we couldn't find the page you were looking for.</p>
      <a href="<?php echo esc_url(home_url('/')); ?>" class="btn btn-primary">Return to Homepage <?php echo jgw_icon('arrow-right'); ?></a>
    </div>
  </section>
</main>
<?php get_footer(); ?>
