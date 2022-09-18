<?php

/**
 * Template Name: Home Page
 * Description: The template for displaying the shops in the grid view
 *
 */

get_header();
?>

<?php
$taxonomy = 'shop_category';

$args_category = array(
    'orderby' => 'ID',
    'hierarchical' => 0,
    'parent' => 0,
    'hide_empty' => 0,
    'taxonomy' => 'shop_category',
);

$shop_category_list = get_categories($args_category);
?>


 <div class="row mb-3 mt-3">
    <div class="col">
    <label for="search" class="form-label">Search</label>
      <input id="filter" type="search" placeholder="Search" class="form-control" placeholder="Search" aria-label="Search" autocomplete="off">
    </div>
    <div class="col">
      <label for="category_filter" class="form-label">Filter By Categories</label>
      <select class="form-select" aria-label="Select Category" id="select_category">
        <option selected value="all">All</option>
        <?php foreach ($shop_category_list as $category): ?>
          <option value="<?php echo $category->slug; ?>"><?php echo $category->name; ?></option>
        <?php endforeach;?>
    </select>
    </div>
  </div>

    <div id="mycard" class="row row-cols-1 row-cols-md-3 g-4">

    <?php foreach ($shop_category_list as $category): ?>

            <?php
$args_shops = array(
    'post_type' => 'shops',
    'post_status' => 'publish',
    'posts_per_page' => -1,
    'orderby' => 'ID',
    'order' => 'DESC',
    'tax_query' => array(
        array(
            'taxonomy' => 'shop_category',
            'field' => 'slug',
            'terms' => $category->slug,
        ),
    ),
);


$shop_list = new WP_Query($args_shops);
?>
    <?php if ($shop_list->have_posts()): ?>
      <?php while ($shop_list->have_posts()): $shop_list->the_post();?>
		      <div class="col all sha-box <?php echo $category->slug; ?>">
		        <div class="card">
		          <?php the_post_thumbnail(array(450, 300), ['class' => 'card-img-top', 'title' => 'Shop Logo']);?>
		          <div class="card-body">
		            <h5 class="card-title"><a href="<?php echo get_permalink(); ?>"><?php the_title();?></a></h5>
		            <p class="card-text"><?php echo the_field('address'); ?></p>
		          </div>
		          <?php if(have_rows('operating_hours')): ?>
              <ul class="list-group list-group-flush">
                <?php  while( have_rows('operating_hours') ) : the_row(); ?>
                <?php 
                  $days = get_sub_field('days');
                  $time = get_sub_field('time');
                ?>
		            <li class="list-group-item"><?php echo $days ?> : <?php echo $time ?></li>
                <?php  endwhile; ?>
		          </ul>
              <?php endif; ?>
		          
              <div class="card-body">
		            <a href="<?php echo get_permalink(); ?>" class="card-link">View Details</a>
		          </div>
		        </div>

		      </div>

		      <?php endwhile;?>
        <?php endif;?>

      <?php endforeach;?>





    </div><!-- /.row -->



<?php
get_footer();
