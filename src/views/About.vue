<template>
  <el-container id="about">
    <el-main>
      <el-card class="description" shadow="never">
        <template #header>
          <div class="card-header">
            <h3 class="m-0">
              <el-icon style="vertical-align: text-top" class="mr-3">
                <Document />
              </el-icon>关于我
            </h3>
          </div>
        </template>
        <el-row style="justify-content: center;">
          <div class="avatar">
            <el-avatar shape="square" :size="128" :src="'https://s3.bmp.ovh/imgs/2022/05/28/3ee36dacdf5a8896.jpg'" />
            <p><strong>Stay Hungry, Stay Foolish.</strong></p>
            <p class="mt-0"><small>求知若饥，虚心若愚。</small></p>
          </div>
          <el-descriptions border direction="vertical" class="ml-5">
            <el-descriptions-item label="姓名">李翰林</el-descriptions-item>
            <el-descriptions-item label="电话">15243675933</el-descriptions-item>
            <el-descriptions-item label="现居">长沙市</el-descriptions-item>
            <el-descriptions-item label="学校">长沙理工大学</el-descriptions-item>
            <el-descriptions-item label="专业">计算机</el-descriptions-item>
            <el-descriptions-item label="备注">
              <el-tag size="small" class="mr-3">大学生</el-tag>
              <el-tag size="small" class="mr-3">IT</el-tag>
              <el-tag size="small" class="mr-3">前端</el-tag>
            </el-descriptions-item>
          </el-descriptions>
        </el-row>
        <el-space wrap class="mt-5" alignment="flex-start" size="large">
          <el-card header="兴趣爱好" style="width: 280px">
            <div class="text item">
              游戏
            </div>
            <div class="text item">
              编程
            </div>
            <div class="text item">
              读书
            </div>
            <div class="text item">
              羽毛球
            </div>
            <div class="text item">
              美食
            </div>
          </el-card>
          <el-card header="最近学习" style="width: 280px">
            <div class="text item">
              TCP/IP协议族
            </div>
            <div class="text item">
              计算机基础
            </div>
            <div class="text item">
              操作系统
            </div>
            <div class="text item">
              <el-link type="primary" target="_blank" href="https://www.modevol.com/"><strong>学习观</strong>
              </el-link>
            </div>
          </el-card>
          <el-card header="为什么写这个博客" style="width: 280px">
            <div class="text item text-left">
              1. 本来打算拿之前的一个比赛项目作为Web大作业，可改了良久觉得不合适，又看了看作业要求，决定写一个自己的博客。
            </div>
            <div class="text item text-left">
              2. 最近看了
              <el-link type="primary" target="_blank" href="https://www.modevol.com/" style="vertical-align: text-top;">
                <strong>学习观</strong></el-link>
              受到了启发，开始有条理的设计博客，以后也会不断更新，不断完善。
            </div>
            <div class="text item text-left">
              3. 写这个博客是为了培养写点东西的习惯，同时记录自己的一些想法。
            </div>
          </el-card>
        </el-space>
      </el-card>
    </el-main>
  </el-container>
</template>

<script>
  export default {

  }
</script>

<style lang="less">
  #about {

    .avatar {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }

    .description {
      height: 100vh;
    }

    .el-space .el-card__header {
      font-weight: bold;
      font-size: 125%;
    }

    .text {
      font-size: 14px;
    }

    .text-left {
      text-align: left;
    }

    .item {
      margin-bottom: 18px;
    }
  }
</style>