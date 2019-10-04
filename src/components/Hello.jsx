import style1 from '../assets/style-1.png'
import style2 from '../assets/style-2.png'
import style3 from '../assets/style-3.png'
import style4 from '../assets/style-4.png'
import style5 from '../assets/style-5.png'
import html2canvas from 'html2canvas'
export default {
  data () {
    return {
      index: 0,
      avatar: '',
      imageUrl: '',
      bg: [
          style1,
          style2,
          style3,
          style4,
          style5
      ]
    }
  },
  methods: {
    changeBorder () {
      this.index++
      if (this.index > this.bg.length - 1) {
          this.index = 0
      }
    },
    build () {
      if (!this.avatar) {
        this.$message.error('请先上传头像')
      } else {
          html2canvas(document.getElementById("demo")).then(canvas => {
              document.getElementById('download').appendChild(canvas)

              canvas.toBlob(function (blob) {
                  let reader = new window.FileReader()

                  reader.onloadend = function () {
                      const data = reader.result

                      var btnDownload = document.getElementById("btnDownload")
                      btnDownload.download = 'avatar.png'
                      btnDownload.href = data
                      btnDownload.click()
                  }

                  reader.readAsDataURL(blob)
              })

              this.$message('生成成功')
          })
      }
    },
    handleChange (file) {
      if (file.size > 1024 * 500) {
        this.$message.error('图片不能大于500KB')
        return
      }

      let reader = new window.FileReader()

      reader.onloadend = () => {
        const data = reader.result
        this.avatar = data
      }

      reader.readAsDataURL(file.raw)
    }
  },
  render (h) {
    return (
      <div class='main'>
        <div id="demo">
          <div class="avatar" {...{
            style: {
              backgroundImage: 'url("' + this.avatar + '")'
            }
          }} />

          <div class="pictit" {...{
            style: {
              backgroundImage: 'url("' + this.bg[this.index] + '")'
            }
          }} />
        </div>

        <div class="tool">
            <el-upload class="upload-demo" ref="upload" action="https://jsonplaceholder.typicode.com/posts/"
              {...{
                'props': {
                  'on-change': this.handleChange
                }
              }}
                onChange={this.handleChange} show-file-list={false} auto-upload={false}>
                <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
                <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
            
            { this.avatar ? (
              <div>
                <el-button onClick={this.changeBorder} type="primary" plain>切换边框</el-button>
                <el-button onClick={this.build} type="success" plain>生成图片</el-button>
              </div>
            ) : null}
        </div>

        <div id="download" style="display:none" />

        <a id="btnDownload" class="hide"></a>
      </div>
    )
  }
}
