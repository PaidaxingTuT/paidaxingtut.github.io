<?php
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');

$user = isset($_GET['user']) ? trim($_GET['user']) : '';

if (empty($user)) {
    echo json_encode(['code' => -1, 'msg' => '查询账号不能为空']);
    exit;
}

$url1 = 'https://xmwk.top/api.php?act=chadan&username=' . urlencode($user);
$ch1 = curl_init();
curl_setopt($ch1, CURLOPT_URL, $url1);
curl_setopt($ch1, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch1, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($ch1, CURLOPT_SSL_VERIFYHOST, false);
curl_setopt($ch1, CURLOPT_TIMEOUT, 5);
$response1 = curl_exec($ch1);
curl_close($ch1);

$url2 = 'https://29.bookwk.top/api.php?act=chadanoid';
$postData = http_build_query([
    'uid' => '13156',
    'key' => 'l10hTwtj0jhdLoCO',
    'username' => $user
]);

$ch2 = curl_init();
curl_setopt($ch2, CURLOPT_URL, $url2);
curl_setopt($ch2, CURLOPT_POST, true);
curl_setopt($ch2, CURLOPT_POSTFIELDS, $postData);
curl_setopt($ch2, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch2, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($ch2, CURLOPT_SSL_VERIFYHOST, false);
curl_setopt($ch2, CURLOPT_TIMEOUT, 5);
$response2 = curl_exec($ch2);
curl_close($ch2);

$mergedData = [];
$hasSuccess = false;

if ($response1) {
    $res1 = json_decode($response1, true);
    if (isset($res1['code']) && in_array($res1['code'], [1, 200]) && !empty($res1['data'])) {
        $data1 = is_array($res1['data']) ? $res1['data'] : [$res1['data']];
        $mergedData = array_merge($mergedData, $data1);
        $hasSuccess = true;
    }
}

if ($response2) {
    $res2 = json_decode($response2, true);
    if (isset($res2['code']) && $res2['code'] == 1 && !empty($res2['data'])) {
        $data2 = is_array($res2['data']) ? $res2['data'] : [$res2['data']];
        $mergedData = array_merge($mergedData, $data2);
        $hasSuccess = true;
    }
}

if ($hasSuccess && count($mergedData) > 0) {
    
    $mergedData = array_filter($mergedData, function($item) {
        return !(isset($item['status']) && $item['status'] === '已取消');
    });

    if (count($mergedData) > 0) {

        usort($mergedData, function($a, $b) {
            $timeA = isset($a['addtime']) ? strtotime($a['addtime']) : 0;
            $timeB = isset($b['addtime']) ? strtotime($b['addtime']) : 0;
            return $timeB - $timeA;
        });
        
        
        echo json_encode(['code' => 200, 'msg' => '查询成功', 'data' => $mergedData]);
    } else {
        
        echo json_encode(['code' => -1, 'msg' => '未查询到有效进度，或订单均已取消']);
    }
    
} else {
    echo json_encode(['code' => -1, 'msg' => '未查询到该账号进度，或上游接口繁忙']);
}
?>