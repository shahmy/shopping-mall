<?php

/**
 * Template Name: Articles List Page
 *
 */

get_header();
?>


<div class="row row-cols-1 row-cols-md-3 g-4 mt-3">


  <?php
  $args_posts = array(
    'post_type' => 'post',
    'post_status' => 'publish',
    'posts_per_page' => -1,
    'orderby' => 'ID',
    'order' => 'DESC',
  );


  $post_list = new WP_Query($args_posts);
  ?>
  <?php if ($post_list->have_posts()) : ?>
    <?php while ($post_list->have_posts()) : $post_list->the_post(); ?>
      <div class="col">
        <div class="card">
          <?php the_post_thumbnail(array(450, 300), ['class' => 'card-img-top', 'title' => 'Shop Logo']); ?>
          <div class="card-body">
            <h5 class="card-title"><a href="<?php echo get_permalink(); ?>"><?php the_title(); ?></a></h5>
            <?php the_excerpt(); ?>
          </div>
          <div class="card-body">
            <a href="<?php echo get_permalink(); ?>" class="card-link">View Details</a>
          </div>
        </div>

      </div>

    <?php endwhile; ?>
  <?php endif; ?>

</div><!-- /.row -->



<?php
get_footer();
