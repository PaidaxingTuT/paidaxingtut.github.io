<?php
error_reporting(E_ALL);
ini_set('display_errors', 0);
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');

function sendJson($status, $msg, $data = null) {
    echo json_encode(['status' => $status, 'msg' => $msg, 'data' => $data], JSON_UNESCAPED_UNICODE);
    exit;
}

if (!function_exists('curl_init')) sendJson('error', '服务器未开启 PHP cURL 扩展');
if ($_SERVER['REQUEST_METHOD'] !== 'POST') sendJson('error', '请使用 POST 方法请求');
if (empty($_POST['cookie'])) sendJson('error', '缺少 Cookie');

try {
    $url = "https://jwxt.lcu.edu.cn/jwglxt/cjcx/cjcx_cxXsgrcj.html?doType=query&gnmkdm=N305005";
    $cookie = trim($_POST['cookie']);
    $cookie = str_replace(["\r", "\n"], '', $cookie);

    $xnm = isset($_POST['xnm']) ? $_POST['xnm'] : "";
    $xqm = isset($_POST['xqm']) ? $_POST['xqm'] : "";

    $postData = [
        "xnm" => $xnm,
        "xqm" => $xqm,
        "sfzgcj" => "0",
        "kcbj" => "",
        "_search" => "false",
        "nd" => time() * 1000,
        "queryModel.showCount" => "500",
        "queryModel.currentPage" => "1",
        "queryModel.sortName" => "",
        "queryModel.sortOrder" => "asc",
        "time" => "0"
    ];

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($postData));
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
    curl_setopt($ch, CURLOPT_TIMEOUT, 10);

    $headers = [
        "Content-Type: application/x-www-form-urlencoded;charset=UTF-8",
        "User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/120.0.0.0 Safari/537.36",
        "Referer: https://jwxt.lcu.edu.cn/jwglxt/cjcx/cjcx_cxXsgrcj.html?gnmkdm=N305005",
        "Cookie: " . $cookie
    ];
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

    $response = curl_exec($ch);
    if (curl_errno($ch)) throw new Exception(curl_error($ch));
    curl_close($ch);

    $jsonResult = json_decode($response, true);

    if (json_last_error() !== JSON_ERROR_NONE) {
        sendJson('error', '查询异常：Cookie 可能错误或已过期 (教务系统返回了非JSON数据)');
    }

    if ($jsonResult && isset($jsonResult['items'])) {
        $totalCredits = 0;
        $totalCreditPoints = 0;

        foreach ($jsonResult['items'] as $item) {
            $credit = floatval($item['xf']);
            $xfjd = floatval($item['xfjd']);

            if ($credit > 0) {
                $totalCredits += $credit;
                $totalCreditPoints += $xfjd;
            }
        }

        $gpa = $totalCredits > 0 ? ($totalCreditPoints / $totalCredits) : 0;

        $jsonResult['calculated_data'] = [
            'total_credits' => $totalCredits,
            'total_credit_points' => $totalCreditPoints,
            'average_gpa' => number_format($gpa, 2)
        ];

        echo json_encode($jsonResult, JSON_UNESCAPED_UNICODE);

    } else {
        sendJson('error', '查询失败：未获取到成绩数据，请检查 Cookie 是否正确。');
    }

} catch (Exception $e) {
    sendJson('error', 'API 内部错误: ' . $e->getMessage());
}
?>