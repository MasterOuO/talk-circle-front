<template>
   <div>
        <div class="content-wrapper">
            <div class="inner-container container">
                <div class="row">
                    <div class="section-header col-md-12">
                        <h2>會員登入</h2>
                    </div> <!-- /.section-header -->
                </div> <!-- /.row -->
                    <div class="contact-form">
                        <div class="box-content col-md-12">
                            <div class="row">
                                <div class="col-md-7">
                                    <div class="contact-form-inner">
                                        <form method="post" action="#" name="contactform" id="contactform">
                                        <p>
                                            <label for="account">帳號 :</label>
                                            <input name="account" type="text" id="account">
                                        </p>
                                        <p>
                                            <label for="passward">密碼 :</label>
                                            <input name="passward" type="passward" id="passward"> 
                                        </p>
                                            <input type="submit" class="mainBtn" id="submit" value="登入" />
                                        </form>
                                        <p>還沒有帳號嗎?<router-link to="/register">註冊</router-link></p>
                                    </div>
                                </div>
                            </div>
                        
                    </div> <!-- /.contact-form-inner -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name : 'LoginPage',
}
</script>
