var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "40000",
        "ok": "39994",
        "ko": "6"
    },
    "minResponseTime": {
        "total": "202",
        "ok": "202",
        "ko": "2443"
    },
    "maxResponseTime": {
        "total": "5356",
        "ok": "5356",
        "ko": "4166"
    },
    "meanResponseTime": {
        "total": "2102",
        "ok": "2101",
        "ko": "3216"
    },
    "standardDeviation": {
        "total": "1304",
        "ok": "1304",
        "ko": "660"
    },
    "percentiles1": {
        "total": "2093",
        "ok": "2093",
        "ko": "3151"
    },
    "percentiles2": {
        "total": "3016",
        "ok": "3016",
        "ko": "3763"
    },
    "percentiles3": {
        "total": "4547",
        "ok": "4547",
        "ko": "4104"
    },
    "percentiles4": {
        "total": "5061",
        "ok": "5061",
        "ko": "4154"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 7989,
        "percentage": 20
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 4914,
        "percentage": 12
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 27091,
        "percentage": 68
    },
    "group4": {
        "name": "failed",
        "count": 6,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "784.314",
        "ok": "784.196",
        "ko": "0.118"
    }
},
contents: {
"req_add-person-test-ac713": {
        type: "REQUEST",
        name: "add-person-test",
path: "add-person-test",
pathFormatted: "req_add-person-test-ac713",
stats: {
    "name": "add-person-test",
    "numberOfRequests": {
        "total": "40000",
        "ok": "39994",
        "ko": "6"
    },
    "minResponseTime": {
        "total": "202",
        "ok": "202",
        "ko": "2443"
    },
    "maxResponseTime": {
        "total": "5356",
        "ok": "5356",
        "ko": "4166"
    },
    "meanResponseTime": {
        "total": "2102",
        "ok": "2101",
        "ko": "3216"
    },
    "standardDeviation": {
        "total": "1304",
        "ok": "1304",
        "ko": "660"
    },
    "percentiles1": {
        "total": "2093",
        "ok": "2093",
        "ko": "3151"
    },
    "percentiles2": {
        "total": "3017",
        "ok": "3017",
        "ko": "3763"
    },
    "percentiles3": {
        "total": "4547",
        "ok": "4547",
        "ko": "4104"
    },
    "percentiles4": {
        "total": "5061",
        "ok": "5061",
        "ko": "4154"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 7989,
        "percentage": 20
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 4914,
        "percentage": 12
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 27091,
        "percentage": 68
    },
    "group4": {
        "name": "failed",
        "count": 6,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "784.314",
        "ok": "784.196",
        "ko": "0.118"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
