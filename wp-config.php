<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'shoppingmalldb' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'RsS@n7V9@WcMu(Qt#V?Xm>nx{z>FfsH&]ITv9xqX^Sh-IX O3ZxMq1pLt,OxDVw|' );
define( 'SECURE_AUTH_KEY',  'j~s|NdRZs?S$jF*g.Yh,wr?=VjNS=`[0(_a:I,vABaG>&wB~31e7]B^8b`){bAG`' );
define( 'LOGGED_IN_KEY',    'bEpAz2vL^>GT45zU[RXh<+SvvKi!!k4P(#Z+P,%6e1uN5{>OhRVk*8_yJo4zCaq:' );
define( 'NONCE_KEY',        'M~/r;28[CDzktWU~6k.=D,M2p2@nSOri#pC~1z1x?@14n,gYz3ri*e1?X#w(uQ63' );
define( 'AUTH_SALT',        '0EcO/oO!kowtROyr$>]CL1S6>sz$0a =(y^?cI]F=?[lZ/V~^BYQdw#1.:T_WQM&' );
define( 'SECURE_AUTH_SALT', '(vC,avh6SSGnl:h:=(*U$Z<7xygoAL?^ me%LQ?e.<S(ASrTYwIyR&|^R _:P_ZX' );
define( 'LOGGED_IN_SALT',   'NMm&@QyQHj`]WWCl=pjO_@yylA?7l@N(*E@<_t:jJ1dmMaCBsb2m){9U_ w{BBTS' );
define( 'NONCE_SALT',       '*TJ=%)3zx9r~4kkAeV[#pqo,WM`g&Xvdu{Rfm-ID:3IY:/OuGw3l!BT;z#?e<h3%' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'sm_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
