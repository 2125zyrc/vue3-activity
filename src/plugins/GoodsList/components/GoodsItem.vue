<template>
  <div class="goods-item">
    <div class="add">+</div>
    <div class="img-box">
      <div class="icon"></div>
      <img src="https://wpimg.wallstcn.com/577965b9-bb9e-4e02-9f0c-095b41417191">
    </div>
    <div class="content">
      <div class="van-multi-ellipsis--l2 goods-name">
        东阿阿胶片可送礼可打粉固元膏女性补品备份东阿阿胶片可送礼可打粉固元膏女性补品备份
      </div>
      <div class="van-ellipsis goods-desc">
        240g增强免疫力
      </div>
      <div class="tag-list">
        <div class="tag-item">满99减10</div>
      </div>
      <div class="discount">
        <div class="right">
          <div class="now">
            <span class="rmb">￥</span>
            <span class="int-num">99</span>
            <span class="float-num">.00</span>
          </div>
          <div class="old">￥199.00</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup () {
    

    return {}
  }
}
</script>

<style lang="scss" scoped>
  .goods-item{
    width: calc(50% - 8px);
    background: #ffffff;
    position: relative;
    margin-bottom: 16px;
    &:nth-child(odd){
      margin-right: 8px;
    }
    &:nth-child(even){
      margin-left: 8px;
    }
    .add{
      height: 22px;
      width: 22px;
      font-size: 18px;
      line-height: 22px;
      text-align: center;
      color: #ffffff;
      border-radius: 50%;
      position: absolute;
      bottom: 10px;
      right: 10px;
      background: #ff5300;
    }
    .img-box{
      height: 160px;
      position: relative;
      .icon{
        position: absolute;
        top: 10px;
        left: 10px;
      }
      img{
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .content{
      padding: 10px;
    }
    .goods-name{
      font-size: 12px;
      color: rgba(0,0,0,0.80);
      line-height: 17px;
      font-weight: 600;
    }
    .goods-desc{
      color: rgba(0,0,0,0.50);
      line-height: 14px;
      font-size: 10px;
      margin: 6px 0 4px 0;
    }
    .tag-list{
      display: flex;
      margin-bottom: 4px;
      .tag-item{
        height: 16px;
        line-height: 16px;
        background: rgba(255,17,17,0.10);
        border-radius: 4px;
        font-size: 9px;
        color: #ff1111;
        padding: 0 4px;
      }
    }
    .discount{
      width: 78px;
      height: 34px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #FF1111;
      font-size: 8px;
      color: #ffffff;
      text-align: center;
      border-radius: 6px;
      .left{
        width: 23px;
        height: 100%;
        color:#000000;
        background: #ffc900;
        border-radius: 5px 0 0 5px;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      .right{
        flex: 1;
      }
      .old{
        text-decoration: line-through;
        font-size: 8px;
      }
      .rmb{
          font-size: 9px;
          font-weight: 600;
        }
        .int-num{
          font-size: 16px;
          font-weight: 600;
        }
        .float-num{
          font-size: 9px;
        }
    }
  }
</style>