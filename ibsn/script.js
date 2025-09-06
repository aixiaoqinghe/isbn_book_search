document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('queryForm');
    const isbnInput = document.getElementById('content');
    const resultContainer = document.getElementById('result');

    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        const isbn = isbnInput.value.trim();

        if (!isbn) {
            alert('请输入ISBN号');
            return;
        }

        // 替换为你平台的真实appKey
        const appKey = 'cba4E5813cd447F69cb10d8bb55DBF76';
        const apiUrl = `https://route.showapi.com/2218-1?appKey=${appKey}&isbn=${isbn}`;

        try {
            const response = await fetch(apiUrl, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP错误！状态码：${response.status}`);
            }

            const data = await response.json();
            console.log('API返回完整数据：', data);

            if (data.showapi_res_code === 0 && data.showapi_res_body.ret_code === 0 && data.showapi_res_body.datas.length > 0) {
                const book = data.showapi_res_body.datas[0];
                resultContainer.innerHTML = `
          <h3>图书信息</h3>
          <p><strong>书名：</strong>${book.title || "未知"}</p>
          <p><strong>作者：</strong>${book.author || "未知"}</p>
          <p><strong>出版社：</strong>${book.publisher || "未知"}</p>
          <p><strong>ISBN：</strong>${book.isbn || "未知"}</p>
          <p><strong>价格：</strong>${book.price || "未知"}</p>
        `;
            } else {
                resultContainer.innerHTML = '<p>未查询到该ISBN对应的图书信息</p>';
            }
        } catch (error) {
            console.error('API请求失败：', error);
            resultContainer.innerHTML = '<p>查询失败，请检查网络或API配置</p>';
        }
    });
});