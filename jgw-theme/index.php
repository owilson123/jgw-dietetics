<?php get_header(); ?>
<main>
  <section class="section-padding bg-off-white">
    <div class="container-wide">
      <?php if ( have_posts() ) : ?>
      <div class="grid-3">
        <?php while ( have_posts() ) : the_post(); ?>
        <article class="post-card">
          <?php if ( has_post_thumbnail() ) : ?>
          <div class="post-card-thumb"><?php the_post_thumbnail('medium_large'); ?></div>
          <?php endif; ?>
          <div class="post-card-body">
            <div class="post-card-meta"><?php echo get_the_date(); ?></div>
            <h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
            <p><?php the_excerpt(); ?></p>
            <a href="<?php the_permalink(); ?>" class="post-card-link">Read more <?php echo jgw_icon('arrow-right'); ?></a>
          </div>
        </article>
        <?php endwhile; ?>
      </div>
      <?php the_posts_pagination(); ?>
      <?php else : ?>
      <p>No posts found.</p>
      <?php endif; ?>
    </div>
  </section>
</main>
<?php get_footer(); ?>
