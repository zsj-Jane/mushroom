// components/circle/circle.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    canvasId: Number,
    width: {
      type: Number,
      value: 100
    },
    height: {
      type: Number,
      value: 100
    },
    backgroundColor: {
      type: String,
      value: '#f3f3f3'
    },
    foregroundColor: {
      type: String,
      value: '#B4D66F'
    },
    lineWidth: {
      type: Number,
      value: 5
    },
    progress: {
      type: Number,
      value: 100
    }
  },
  lifetimes: {
    // 在组件在视图层布局完成后执行
    ready: function () {
      // 开始绘制进度
      this.drawProgress();
    }
  },
  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 绘制进度
    drawProgress() {
      const { canvasId, width, height, backgroundColor, foregroundColor, lineWidth, progress } = this.properties;
      // 创建 canvas 的绘图上下文 CanvasContext 对象
      const ctx = wx.createCanvasContext(canvasId, this);//子组件中第二个参数必须写this
      // 接下来一笔一笔地画
      // 第一笔：画背景
      ctx.beginPath();//开启路径
      ctx.strokeStyle = backgroundColor;//颜色
      ctx.lineWidth = lineWidth;//线宽
      ctx.arc(width / 2, height / 2, (width - lineWidth) / 2, 0, Math.PI * 2);
      ctx.stroke();//非填充式画法

      // 第二笔：画进度
      ctx.beginPath();//开启路径
      ctx.strokeStyle = foregroundColor;
      ctx.lineWidth = lineWidth;
      ctx.lineCap = 'round';//线条末端圆形线帽
      // 结束角度 （起始角度为3点钟方向，需要减去90度才是结束角度）
      const endAngle = (progress / 100) * 2 * Math.PI - Math.PI * 0.5;
      ctx.arc(width / 2, height / 2, (width - lineWidth) / 2, -Math.PI * 0.5, endAngle);
      ctx.stroke();//非填充式画法

      // 第三笔：画文字
      ctx.beginPath();//开启路径
      ctx.fillStyle = foregroundColor;
      const font_size = 12;
      ctx.font = font_size + 'px Helvetica';//字体大小
      if (progress > 99) {
        // 当进度为三位数时
        ctx.fillText(parseInt(progress) + '%', width / 2 - 13, height / 2 + 6);
      } else {
        // 当进度为两位数时
        ctx.fillText(parseInt(progress) + '%', width / 2 - 10, height / 2 + 6);
      }

      // 实现画布
      ctx.draw();
    }
  }
})
