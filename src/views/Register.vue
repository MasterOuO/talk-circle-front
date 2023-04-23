<template>
   <div>
        <div class="content-wrapper">
            <div class="inner-container container">
                <div class="section-header col-md-12">
                    <h2>註冊頁面</h2>
                    <div class="contact-form-inner">
                        <form method="post" action="#" name="contactform" id="contactform">
                        <p>
                            <label for="name">Your Name:</label>
                            <input name="name" type="text" id="name">
                        </p>
                        <p>
                            <label for="email">Email Address:</label>
                            <input name="email" type="text" id="email"> 
                        </p>
                        <p>
                            <label for="phone">Phone Number:</label>
                            <input name="phone" type="text" id="phone">   
                        </p>
                        <p>
                            <label for="comments">Your message:</label>
                            <textarea name="comments" id="comments"></textarea>    
                        </p>
                            <input type="submit" class="mainBtn" id="submit" value="登入" />
                        </form>
                    </div> <!-- /.contact-form-inner -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name : 'RegisterPage',
}
</script>
