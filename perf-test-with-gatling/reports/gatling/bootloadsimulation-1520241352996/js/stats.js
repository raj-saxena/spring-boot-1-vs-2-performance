var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "20000",
        "ok": "20000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "201",
        "ok": "201",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1111",
        "ok": "1111",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "291",
        "ok": "291",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "100",
        "ok": "100",
        "ko": "-"
    },
    "percentiles1": {
        "total": "260",
        "ok": "260",
        "ko": "-"
    },
    "percentiles2": {
        "total": "317",
        "ok": "317",
        "ko": "-"
    },
    "percentiles3": {
        "total": "480",
        "ok": "480",
        "ko": "-"
    },
    "percentiles4": {
        "total": "716",
        "ok": "716",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 19891,
        "percentage": 99
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 109,
        "percentage": 1
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "833.333",
        "ok": "833.333",
        "ko": "-"
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
        "total": "20000",
        "ok": "20000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "201",
        "ok": "201",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1111",
        "ok": "1111",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "291",
        "ok": "291",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "100",
        "ok": "100",
        "ko": "-"
    },
    "percentiles1": {
        "total": "260",
        "ok": "260",
        "ko": "-"
    },
    "percentiles2": {
        "total": "317",
        "ok": "317",
        "ko": "-"
    },
    "percentiles3": {
        "total": "480",
        "ok": "480",
        "ko": "-"
    },
    "percentiles4": {
        "total": "716",
        "ok": "716",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 19891,
        "percentage": 99
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 109,
        "percentage": 1
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "833.333",
        "ok": "833.333",
        "ko": "-"
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
