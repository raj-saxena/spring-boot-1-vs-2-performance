var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "10000",
        "ok": "10000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "202",
        "ok": "202",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1053",
        "ok": "1053",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "331",
        "ok": "331",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "108",
        "ok": "108",
        "ko": "-"
    },
    "percentiles1": {
        "total": "302",
        "ok": "302",
        "ko": "-"
    },
    "percentiles2": {
        "total": "382",
        "ok": "382",
        "ko": "-"
    },
    "percentiles3": {
        "total": "552",
        "ok": "552",
        "ko": "-"
    },
    "percentiles4": {
        "total": "700",
        "ok": "700",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 9977,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 23,
        "percentage": 0
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
        "total": "476.19",
        "ok": "476.19",
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
        "total": "10000",
        "ok": "10000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "202",
        "ok": "202",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1053",
        "ok": "1053",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "331",
        "ok": "331",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "108",
        "ok": "108",
        "ko": "-"
    },
    "percentiles1": {
        "total": "302",
        "ok": "302",
        "ko": "-"
    },
    "percentiles2": {
        "total": "382",
        "ok": "382",
        "ko": "-"
    },
    "percentiles3": {
        "total": "552",
        "ok": "552",
        "ko": "-"
    },
    "percentiles4": {
        "total": "700",
        "ok": "700",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 9977,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 23,
        "percentage": 0
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
        "total": "476.19",
        "ok": "476.19",
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
