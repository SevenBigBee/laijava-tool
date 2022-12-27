<template>
  <div>
    <!-- Main container -->
    <nav class="level">
      <div class="level-left"></div>
      <!-- Right side -->
      <div class="level-right">
        <p class="level-item">
          <input
            v-show="false"
            id="import-input"
            type="file"
            ref="fileClear"
            @change="loadTextFromFile"
          />

          <b-button
            label="导入"
            type="is-success is-light"
            icon-pack="fas"
            icon-left="fa-download"
            @click="importFile()"
          />
        </p>
        <p class="level-item">
          <b-button
            label="导出"
            type="is-warning is-light"
            icon-pack="fas"
            icon-left="fa-upload"
            @click="saveAs()"
          />
        </p>
      </div>
    </nav>
    <div class="columns">
      <div class="column is-6">
        <div id="jsoneditorCode" style="height: 61.8vh"></div>
      </div>
      <div class="column is-6">
        <div id="jsoneditor" style="height: 61.8vh"></div>
      </div>
    </div>

    <b-message
      title="帮助文档"
      type="is-success"
      aria-close-label="Close message"
    >
      <div class="columns is-multiline">
        <div class="column is-3">
          <div class="jsoneditor-dragarea-tip"></div>
        </div>
        <div class="column is-3">可拖拽元素</div>
        <div class="column is-3">
          <div class="jsoneditor-contextmenu-button-tip"></div>
        </div>
        <div class="column is-3">编辑按钮</div>
      </div>
    </b-message>
    <b-message
      title="编辑模式快捷键"
      type="is-success"
      :closable="false"
      aria-close-label="Close message"
    >
      <div class="columns is-multiline">
        <div class="column is-3">
          <div class="keyboard">Ctrl</div>
          <span class="has-text-weight-bold">+</span>
          <div class="keyboard">M</div>
        </div>
        <div class="column is-3 keyboard-desc">展开操作菜单</div>

        <div class="column is-3">
          <div class="keyboard">Ctrl</div>
          <span class="has-text-weight-bold">+</span>
          <div class="keyboard">Z</div>
        </div>
        <div class="column is-3 keyboard-desc">撤销上次操作</div>

        <div class="column is-3">
          <div class="keyboard">Ctrl</div>
          <span class="has-text-weight-bold">+</span>
          <div class="keyboard">Shift</div>
          <span class="has-text-weight-bold">+</span>
          <div class="keyboard">Z</div>
        </div>
        <div class="column is-3 keyboard-desc">重做</div>

        <div class="column is-3">
          <div class="keyboard">Alt</div>
          <span class="has-text-weight-bold">+</span>
          <div class="keyboard">方向键</div>
        </div>
        <div class="column is-3 keyboard-desc">通过方向键切换选中字段</div>

        <div class="column is-3">
          <div class="keyboard">Ctrl</div>
          <span class="has-text-weight-bold">+</span>
          <div class="keyboard">Shift</div>
          <span class="has-text-weight-bold">+</span>
          <div class="keyboard">上下键</div>
        </div>
        <div class="column is-3 keyboard-desc">选择多个字段</div>

        <div class="column is-3">
          <div class="keyboard">Shift</div>
          <span class="has-text-weight-bold">+</span>
          <div class="keyboard">Alt</div>
          <span class="has-text-weight-bold">+</span>
          <div class="keyboard">方向键</div>
        </div>
        <div class="column is-3 keyboard-desc">
          通过上下键移动当前或选中字段
        </div>

        <div class="column is-3">
          <div class="keyboard">Ctrl</div>
          <span class="has-text-weight-bold">+</span>
          <div class="keyboard">D</div>
        </div>
        <div class="column is-3 keyboard-desc">复制字段</div>

        <div class="column is-3">
          <div class="keyboard">Ctrl</div>
          <span class="has-text-weight-bold">+</span>
          <div class="keyboard">Del</div>
        </div>
        <div class="column is-3 keyboard-desc">删除字段</div>

        <div class="column is-3">
          <div class="keyboard">Ctrl</div>
          <span class="has-text-weight-bold">+</span>
          <div class="keyboard">Enter</div>
        </div>
        <div class="column is-3 keyboard-desc">打开字段中的超链接</div>

        <div class="column is-3">
          <div class="keyboard">Ctrl</div>
          <span class="has-text-weight-bold">+</span>
          <div class="keyboard">Ins</div>
        </div>
        <div class="column is-3 keyboard-desc">插入自动类型字段</div>

        <div class="column is-3">
          <div class="keyboard">Ctrl</div>
          <span class="has-text-weight-bold">+</span>
          <div class="keyboard">Shift</div>
          <span class="has-text-weight-bold">+</span>
          <div class="keyboard">Ins</div>
        </div>
        <div class="column is-3 keyboard-desc">追加自动类型字段</div>

        <div class="column is-3">
          <div class="keyboard">Ctrl</div>
          <span class="has-text-weight-bold">+</span>
          <div class="keyboard">E</div>
        </div>
        <div class="column is-3 keyboard-desc">展开或折叠字段</div>

        <div class="column is-3">
          <div class="keyboard">Ctrl</div>
          <span class="has-text-weight-bold">+</span>
          <div class="keyboard">F</div>
        </div>
        <div class="column is-3 keyboard-desc">查找</div>

        <div class="column is-3">
          <div class="keyboard">F3</div>
          <span class="has-text-weight-bold">,</span>
          <div class="keyboard">Ctrl</div>
          <span class="has-text-weight-bold">+</span>
          <div class="keyboard">G</div>
        </div>
        <div class="column is-3 keyboard-desc">查找下一个</div>

        <div class="column is-3">
          <div class="keyboard">Shift</div>
          <span class="has-text-weight-bold">+</span>
          <div class="keyboard">F3</div>
          <span class="has-text-weight-bold">,</span>
          <div class="keyboard">Ctrl</div>
          <span class="has-text-weight-bold">+</span>
          <div class="keyboard">Shift</div>
          <span class="has-text-weight-bold">+</span>
          <div class="keyboard">G</div>
        </div>

        <div class="column is-3 keyboard-desc">查找上一个</div>
        <div class="column is-3">
          <div class="keyboard">Alt</div>
          <span class="has-text-weight-bold">+</span>
          <div class="keyboard">Home</div>
        </div>
        <div class="column is-3 keyboard-desc">光标移动到第一个字段</div>

        <div class="column is-3">
          <div class="keyboard">Alt</div>
          <span class="has-text-weight-bold">+</span>
          <div class="keyboard">End</div>
        </div>
        <div class="column is-3 keyboard-desc">光标移动到最后字段</div>
      </div>
    </b-message>

    <b-message
      title="代码模式快捷键"
      type="is-success"
      aria-close-label="Close message"
      :closable="false"
    >
      <div class="columns is-multiline">
        <div class="column is-6">
          <div class="keyboard">Ctrl</div>
          <span class="has-text-weight-bold">+</span>
          <div class="keyboard">I</div>
        </div>
        <div class="column is-6 keyboard-desc">Json格式化</div>

        <div class="column is-6">
          <div class="keyboard">Ctrl</div>
          <span class="has-text-weight-bold">+</span>
          <div class="keyboard">Shift</div>
          <span class="has-text-weight-bold">+</span>
          <div class="keyboard">I</div>
        </div>
        <div class="column is-6 keyboard-desc">Json压缩</div>
      </div>
    </b-message>

    <PageFooter>
      <p>
        <strong>Powered </strong> by
        <a href="https://github.com/josdejong/jsoneditor">jsoneditor</a>,
        <a href="https://ace.c9.io/">Ace Editor</a> ,
        <a href="http://bgrins.github.io/filereader.js/"> FileReader.js</a>
        and
        <a href="https://github.com/eligrey/FileSaver.js"> FileSaver.js</a> .
      </p>
    </PageFooter>
  </div>
</template>

<script>
import JSONEditor from "jsoneditor";
import PageFooter from "@/components/PageFooter.vue";
import "jsoneditor/dist/jsoneditor.css";
import "@/assets/css/jsonEditor/jsonEditorLight.css";
import { saveAs } from "file-saver";
let _ = require("lodash");

export default {
  name: "jsonEditor",
  // 注册组件
  components: { PageFooter },
  data() {
    return {
      editor: null,
      code: null,
      initialJson: {
        Array: [1, 2, 3],
        Boolean: true,
        Null: null,
        Number: 123,
        Object: { a: "b", c: "d" },
        String: "Hello World",
      }, // json是否验证通过
    };
  },
  created() {
    let $this = this;
    this.$nextTick(function () {
      const container = document.getElementById("jsoneditor");
      const options = {
        enableTransform: true,
        mode: "tree",
        onChangeText: function (jsonString) {
          $this.code.updateText(jsonString);
          $this.formatJson();
        },
        autocomplete: {
          applyTo: ["value"],
          filter: "contain",
          trigger: "focus",
          getOptions: function (text, path, input, editor) {
            return new Promise(function (resolve, reject) {
              const options = $this.extractUniqueWords(editor.get());
              if (options.length > 0) {
                resolve(options);
              } else {
                reject();
              }
            });
          },
        },
      };
      $this.editor = new JSONEditor(container, options);
      // set json
      $this.editor.set($this.initialJson);
      const containerCode = document.getElementById("jsoneditorCode");
      const optionsCode = {
        enableTransform: true,
        mode: "code",
        onChangeText: function (jsonString) {
          $this.editor.updateText(jsonString);
        },
      };
      $this.code = new JSONEditor(containerCode, optionsCode);
      // set json
      $this.code.set($this.initialJson);
    });
  },
  methods: {
    loadTextFromFile(ev) {
      let $this = this;
      const file = ev.target.files[0];
      const reader = new FileReader();
      //以text方式读取
      reader.readAsText(file);
      //text加载完成后
      reader.onload = (e) => {
        $this.editor.setText(e.target.result);
        $this.code.setText(e.target.result);
        $this.formatJson();
      };
    },
    importFile() {
      this.$refs.fileClear.value = "";
      let obj = document.getElementById("import-input");
      obj.click();
    },
    saveAs() {
      let fname = window.prompt("另存为...");
      // Check json extension in file name
      if (!fname) {
        this.$buefy.toast.open({
          duration: 5000,
          message: `请先输入文件名称！`,
          type: "is-danger",
        });
        return;
      }
      if (fname.indexOf(".") === -1) {
        fname = fname + ".txt";
      } else {
        if (fname.split(".").pop().toLowerCase() === "txt") {
          // Nothing to do
        } else {
          fname = fname.split(".")[0] + ".txt";
        }
      }
      const blob = new Blob([this.editor.getText()], {
        type: "application/json;charset=utf-8",
      });
      saveAs(blob, fname);
    },
    formatJson() {
      let format = document.querySelector(".jsoneditor-format");
      format.click();
    },
    extractUniqueWords(json) {
      return _.uniq(
        _.flatMapDeep(json, function (value, key) {
          return _.isObject(value) ? [key] : [key, String(value)];
        })
      );
    },
  },
  metaInfo: {
    title: "json在线编辑器", // set a title
    meta: [
      {
        // set meta
        name: "keyWords",
        content:
          "jsoneditor,json在线编辑器, json editor,json 在线 工具,json 在线",
      },
      {
        name: "description",
        content: "json在线编辑器，可视化编辑器，格式json代码，支持格式键盘指令",
      },
    ],
    link: [
      {
        // set link
        rel: "asstes",
        href: "https://laijava.com/",
      },
    ],
  },
};
</script>

<style scoped>
.column {
  text-align: left;
}
/*~@/tools/img/jsoneditor-icons.94cc3007.svg*/
.jsoneditor-dragarea-tip {
  background-image: url("~jsoneditor/dist/img/jsoneditor-icons.svg");
  background-position: -72px -72px;
  height: 24px;
  width: 24px;
  border-radius: 2px;
  box-shadow: 0 0 2px #178908;
  cursor: move;
}
.jsoneditor-contextmenu-button-tip {
  width: 24px;
  height: 24px;
  padding: 0;
  margin: 0;
  cursor: pointer;
  background-color: transparent;
  background-image: url("~jsoneditor/dist/img/jsoneditor-icons.svg");
  border-radius: 2px;
  box-shadow: 0 0 2px #178908;
  background-position: -48px -72px;
}
.keyboard {
  height: 60px;
  padding: 0;
  margin: 0;
  cursor: pointer;
  border-radius: 2px;
  box-shadow: 0 0 2px #178908;
  line-height: 60px;
  text-align: center;
  width: 60px;
  margin: 6px;
  display: inline-block;
}
.keyboard-desc {
  line-height: 72px;
}
</style>
