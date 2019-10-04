<script>
export default {
  name: 'App',
  render () {
    return (
      <div id="app">
        <router-view />
      </div>
    )
  }
}
</script>

<style>
#app {
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
}
#demo {
    width: 475px;
    height: 475px;
    position: relative;
}
.main {
  text-align: center;
}
.pictit {
    background-size: cover;
    position: absolute;
    right: -1px;
    left: 0;
    top: 0;
    bottom: 0;
}
.avatar{
    background-size: cover;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}
.tool {
    margin-top: 20px;
}
.tool button {
    margin-top: 20px;
}
.hide {
    display: none
}
.copyright {
    margin-top:10px;font-size:14px;
}
</style>
