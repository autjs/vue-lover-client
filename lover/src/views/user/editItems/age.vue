
<template>
    <div class="edit-age">
        <TopBar 
            title="修改年龄"
            more='保存'
            :moreAction=save
        />
        <van-picker 
        :columns="columns" 
        :default-index="defaultIndex"
        @change="onChange" />
    </div>
</template>


<script>
import TopBar from "@/components/TopBackToolBar.vue";

export default {
  data() {
    return {
      defaultIndex: this.$store.state.user.age
      
    };
  },
  components: {
      TopBar
  },
  computed: {
      columns() {
          let arr = [];
          for(let i = 0; i < 100; i++) {
              arr.push(i + '岁');
          }
          return arr;
      }
  },
  methods: {
    onChange(picker, value, index) {
        console.log("当前值: %s, 当前索引： %s", value, index)
        this.defaultIndex = index;
    },
    save() {
        this.cn.c2s.saveUserInfo({
            age: this.defaultIndex
        })

        this.$store.state.user.age = this.defaultIndex;
        this.$router.go(-1)
    }
  }
};

</script>

<style scoped>
    .edit-age {
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    .edit-age >>> .van-picker {
        flex: 1;
        overflow: hidden;
    }
</style>