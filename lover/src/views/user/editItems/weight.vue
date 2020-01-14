
<template>
    <div class="edit-weight">
        <TopBar 
            title="修改体重"
            more='保存'
            :moreAction=save
        />
    </div>
</template>


<script>
import TopBar from "@/components/TopBackToolBar.vue";


// TODO: 圆形列表选择器
export default {
  data() {
    return {
      defaultIndex: 20,//this.$store.state.user.age,
      value: 0
    };
  },
  components: {
      TopBar
  },
  computed: {
      columns() {
          let arr = [];
          for(let i = 30; i < 150; i++) {
              arr.push(i + 'kg');
          }
          return arr;
      },
      
  },
  methods: {
    onChange(picker, value, index) {
        console.log("当前值: %s, 当前索引： %s", value, index)
        this.defaultIndex = index;
        this.value = parseInt(value.split('k')[0])
    },
    save() {
        this.cn.c2s.saveUserInfo({
            weight: this.value
        })
        this.$store.state.user.weight = this.value
        this.$router.go(-1)
    }
  }
};

</script>

<style scoped>
    .edit-weight {
        height: 100%;
        display: flex;
        flex-direction: column;
    }
</style>