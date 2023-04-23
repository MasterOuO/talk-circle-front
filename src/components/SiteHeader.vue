<template>
  <!-- 將原始 HTML 中的 header 部分放在這裡 -->
   <header class="site-header container-fluid">
            <div class="top-header">
                <div class="logo col-md-6 col-sm-6">
                    <h1><router-link to="/"><em>Pron</em>Hub</router-link></h1>
                    <span>這是一個18+論壇</span>
                </div> <!-- /.logo -->
                 <div class="auth-links">
                    <li>
                    <router-link to="/login">Login</router-link>
                    </li>
                    <span class="separator"></span>
                    <li>
                    <router-link to="/register">Register</router-link>
                    </li>
                </div>
            </div>
            <div class="main-header">
                <div class="row">
                    <div class="main-header-left col-md-3 col-sm-6 col-xs-8">
                        <a id="search-icon" class="btn-left fa fa-search" href="#search-overlay"></a>
                        <div id="search-overlay">
                            <a href="#search-overlay" class="close-search"><i class="fa fa-times-circle"></i></a>
                            <div class="search-form-holder">
                                <h2>Type keywords and hit enter</h2>
                                <form id="search-form" action="#">
                                    <input type="search" name="s" placeholder="" autocomplete="off" />
                                </form>
                            </div>
                        </div><!-- #search-overlay -->

                    </div> <!-- /.main-header-left -->
                    <div class="menu-wrapper col-md-9 col-sm-6 col-xs-4">
                        <a href="#" class="toggle-menu visible-sm visible-xs"><i class="fa fa-bars"></i></a>
                        <ul class="sf-menu hidden-xs hidden-sm">
                            <li :class="homeActiveClass"><router-link to="/">Home</router-link></li>
                            <li><a href="services.html">Services</a></li>
                            <li><a href="#">Projects</a>
                                <ul>
                                    <li><router-link to="/kanban">KanBan</router-link></li>
                                    <li><a href="project-details.html">Project Single</a></li>
                                </ul>
                            </li>
                            <li :class="blogActiveClass"><router-link to="/blog">Blog</router-link>
                            </li>
                            <li><a href="#">Pages</a>
                                <ul>
                                    <li><a href="our-team.html">Our Team</a></li>
                                    <li><a href="archives.html">Archives</a></li>
                                    <li><a href="grids.html">Columns</a></li>
                                    <li><a href="404.html">404 Page</a></li>
                                </ul>
                            </li>
                            <li><a href="contact.html">Contact</a></li>
                        </ul>
                    </div> <!-- /.menu-wrapper -->
                </div> <!-- /.row -->
            </div> <!-- /.main-header -->
            <div id="responsive-menu">
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="services.html">Services</a></li>
                    <li><a href="#">Projects</a>
                        <ul>
                            <li><a href="projects-2.html">Two Columns</a></li>
                            <li><a href="projects-3.html">Three Columns</a></li>
                            <li><a href="project-details.html">Project Single</a></li>
                        </ul>
                    </li>
                    <li :class="homeActiveClass"><a href="#">Blog</a>
                        <ul>
                            <li><router-link to="/blog">Blog</router-link></li>
                            <li><a href="blog-single.html">Post Single</a></li>
                        </ul>
                    </li>
                    <li><a href="#">Pages</a>
                        <ul>
                            <li><a href="our-team.html">Our Team</a></li>
                            <li><a href="archives.html">Archives</a></li>
                            <li><a href="grids.html">Columns</a></li>
                            <li><a href="404.html">404 Page</a></li>
                        </ul>
                    </li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
            </div>
        </header>
</template>

<script>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

export default {
  name: 'SiteHeader',
  setup() {
    const route = useRoute();

    const homeActiveClass = computed(() => {
      return route.path === '/' ? 'active' : '';
    });

    const blogActiveClass = computed(() => {
      return route.path === '/blog' ? 'active' : '';
    });

    return {
      homeActiveClass,
      blogActiveClass,
    };
  },
};

</script>

<style scoped>
/* 如果需要，將此組件的特定樣式放在這裡 */
.top-header {
  display: flex;
  justify-content: space-between; /* 左右两侧的布局 */
  align-items: center; /* 垂直居中对齐 */
}

.top-header-content,
.auth-links {
  display: flex;
  list-style: none; /* 去掉列表项前的圆点 */
  padding: 0;
  margin: 0 20px;
}

.top-header-content > li,
.auth-links > li {
    margin: 0 10px;
}

.separator {
  display: inline-block;
  border-left: 1px solid #000;
  height: 1.5em;
  margin-left: 5px;
  margin-right: 5px;
  vertical-align: 50%;
}
</style>
