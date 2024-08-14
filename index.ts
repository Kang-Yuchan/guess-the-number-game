/*
ユーザーに 2 つの数字、最小数（n）と最大数（m）を入力してもらうことになります。最小値が最大値以下であることを確認することが重要です。
ユーザーは、この 2 つの数字を入力すると、プログラムが n から m の範囲内で乱数を生成します。その後、ユーザーは乱数を正しく推測するまで、ゲームループの中で繰り返し数字を入力することになります。与えられた範囲内の乱数を生成するには、random モジュールと randint 関数を使用してください。
ゲームをより難しくするために、ユーザーが数字を推測するための試行回数を制限することができます。この場合、for 文で最大 n 回の試行を行うか、while 文でユーザーが数字を正しく当てるまで繰り返し入力する方法があります。
*/

import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const askQuestion = (question: string): Promise<string> => {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
};

const guessTheNumberGame = async (n: number, m: number) => {
  const randomNumber = Math.floor(Math.random() * (m - n + 1)) + n;
  while (true) {
    const answer = await askQuestion("Guess the number! ");
    const answerNumber = parseInt(answer);

    if (answerNumber === randomNumber) {
      console.log("Correct!");
      break;
    } else {
      console.log("Incorrect!");
    }
  }
  rl.close();
};

guessTheNumberGame(1, 10);
