export enum GraphType {
  AREA_SCORE = 'AREA_SCORE',
  AUDIENCE_BY_DEMOGRAPHIC = 'AUDIENCE_BY_DEMOGRAPHIC',
  EMOTION_BY_DEMOGRAPHIC = 'EMOTION_BY_DEMOGRAPHIC',
  EMOTION_CHANGE_BY_DEMOGRAPHIC = 'EMOTION_CHANGE_BY_DEMOGRAPHIC',
  EMOTION_OVERVIEW = 'EMOTION_OVERVIEW',
  ENGAGEMENT_BY_AGE_GROUP = 'ENGAGEMENT_BY_AGE_GROUP',
  ENGAGEMENT_BY_DEMOGRAPHIC_OVERTIME = 'ENGAGEMENT_BY_DEMOGRAPHIC_OVERTIME',
  ENGAGEMENT_BY_GENDER = 'ENGAGEMENT_BY_GENDER',
  ENGAGEMENT_BY_ZONE_AND_DEMOGRAPHIC = 'ENGAGEMENT_BY_ZONE_AND_DEMOGRAPHIC',
  ENGAGEMENT_CHANGE_BY_DEMOGRAPHIC = 'ENGAGEMENT_CHANGE_BY_DEMOGRAPHIC',
  ENGAGEMENT_DISTRIBUTION = 'ENGAGEMENT_DISTRIBUTION',
  EXPERIENCE_SCORE = 'EXPERIENCE_SCORE',
  GENDER_SPLIT = 'GENDER_SPLIT',
  NEGATIVE_EMOTIONS = 'NEGATIVE_EMOTIONS',
  POSITIVE_AND_NEGATIVE_EMOTIONS = 'POSITIVE_AND_NEGATIVE_EMOTIONS',
  POSITIVE_EMOTIONS = 'POSITIVE_EMOTIONS',
  ZONE_DEMOGRAPHIC_SPLIT = 'ZONE_DEMOGRAPHIC_SPLIT',
  ZONE_EMOTION_SPLIT = 'ZONE_EMOTION_SPLIT',
}

export type GraphTypeStr = `${GraphType}`;

export const data = {
  [GraphType.POSITIVE_AND_NEGATIVE_EMOTIONS]: {
    ColumnInfo: [
      {
        Name: 'total',
        Type: {
          ScalarType: 'BIGINT',
        },
      },
      {
        Name: 'positive',
        Type: {
          ScalarType: 'BIGINT',
        },
      },
      {
        Name: 'negative',
        Type: {
          ScalarType: 'BIGINT',
        },
      },
    ],
    Rows: [
      {
        Data: [
          {
            ScalarValue: '569402',
          },
          {
            ScalarValue: '244869',
          },
          {
            ScalarValue: '324397',
          },
        ],
      },
    ],
  },
  [GraphType.EMOTION_BY_DEMOGRAPHIC]: {
    ColumnInfo: [
      {
        Name: 'gender',
        Type: {
          ScalarType: 'VARCHAR',
        },
      },
      {
        Name: 'age_group',
        Type: {
          ScalarType: 'INTEGER',
        },
      },
      {
        Name: 'happy',
        Type: {
          ScalarType: 'BIGINT',
        },
      },
      {
        Name: 'surprised',
        Type: {
          ScalarType: 'BIGINT',
        },
      },
      {
        Name: 'sad',
        Type: {
          ScalarType: 'BIGINT',
        },
      },
      {
        Name: 'angry',
        Type: {
          ScalarType: 'BIGINT',
        },
      },
      {
        Name: 'disgusted',
        Type: {
          ScalarType: 'BIGINT',
        },
      },
      {
        Name: 'fearful',
        Type: {
          ScalarType: 'BIGINT',
        },
      },
    ],
    Rows: [
      {
        Data: [
          {
            ScalarValue: 'male',
          },
          {
            ScalarValue: '20',
          },
          {
            ScalarValue: '1762',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '6157',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'male',
          },
          {
            ScalarValue: '30',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '1',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'female',
          },
          {
            ScalarValue: '20',
          },
          {
            ScalarValue: '336',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '682',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
        ],
      },
    ],
  },
  [GraphType.EMOTION_CHANGE_BY_DEMOGRAPHIC]: {
    ColumnInfo: [
      {
        Name: 'gender_age_group',
        Type: {
          ScalarType: 'VARCHAR',
        },
      },
      {
        Name: 'prev_positive_count',
        Type: {
          ScalarType: 'BIGINT',
        },
      },
      {
        Name: 'prev_neutral_count',
        Type: {
          ScalarType: 'BIGINT',
        },
      },
      {
        Name: 'prev_negative_count',
        Type: {
          ScalarType: 'BIGINT',
        },
      },
      {
        Name: 'prev_total',
        Type: {
          ScalarType: 'BIGINT',
        },
      },
      {
        Name: 'current_positive_count',
        Type: {
          ScalarType: 'BIGINT',
        },
      },
      {
        Name: 'current_neutral_count',
        Type: {
          ScalarType: 'BIGINT',
        },
      },
      {
        Name: 'current_negative_count',
        Type: {
          ScalarType: 'BIGINT',
        },
      },
      {
        Name: 'current_total',
        Type: {
          ScalarType: 'BIGINT',
        },
      },
    ],

    Rows: [
      {
        Data: [
          {
            ScalarValue: 'female 50',
          },
          {
            ScalarValue: '176',
          },
          {
            ScalarValue: '628',
          },
          {
            ScalarValue: '536',
          },
          {
            ScalarValue: '1340',
          },
          {
            ScalarValue: '65',
          },
          {
            ScalarValue: '224',
          },
          {
            ScalarValue: '45',
          },
          {
            ScalarValue: '334',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'male 30',
          },
          {
            ScalarValue: '20184',
          },
          {
            ScalarValue: '31172',
          },
          {
            ScalarValue: '44296',
          },
          {
            ScalarValue: '95667',
          },
          {
            ScalarValue: '4606',
          },
          {
            ScalarValue: '14736',
          },
          {
            ScalarValue: '9051',
          },
          {
            ScalarValue: '28393',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'male 40',
          },
          {
            ScalarValue: '3006',
          },
          {
            ScalarValue: '6193',
          },
          {
            ScalarValue: '6705',
          },
          {
            ScalarValue: '15910',
          },
          {
            ScalarValue: '1620',
          },
          {
            ScalarValue: '2771',
          },
          {
            ScalarValue: '3989',
          },
          {
            ScalarValue: '8380',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'male 50',
          },
          {
            ScalarValue: '613',
          },
          {
            ScalarValue: '1512',
          },
          {
            ScalarValue: '1045',
          },
          {
            ScalarValue: '3170',
          },
          {
            ScalarValue: '57',
          },
          {
            ScalarValue: '150',
          },
          {
            ScalarValue: '58',
          },
          {
            ScalarValue: '265',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'female 0',
          },
          {
            ScalarValue: '29',
          },
          {
            ScalarValue: '20',
          },
          {
            ScalarValue: '493',
          },
          {
            ScalarValue: '542',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'female 40',
          },
          {
            ScalarValue: '470',
          },
          {
            ScalarValue: '937',
          },
          {
            ScalarValue: '677',
          },
          {
            ScalarValue: '2084',
          },
          {
            ScalarValue: '535',
          },
          {
            ScalarValue: '1048',
          },
          {
            ScalarValue: '740',
          },
          {
            ScalarValue: '2323',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'male 20',
          },
          {
            ScalarValue: '18876',
          },
          {
            ScalarValue: '108726',
          },
          {
            ScalarValue: '54455',
          },
          {
            ScalarValue: '182166',
          },
          {
            ScalarValue: '4304',
          },
          {
            ScalarValue: '15824',
          },
          {
            ScalarValue: '8181',
          },
          {
            ScalarValue: '28309',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'male 60',
          },
          {
            ScalarValue: '1',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '1',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'female 20',
          },
          {
            ScalarValue: '155436',
          },
          {
            ScalarValue: '69442',
          },
          {
            ScalarValue: '76783',
          },
          {
            ScalarValue: '301666',
          },
          {
            ScalarValue: '14480',
          },
          {
            ScalarValue: '28105',
          },
          {
            ScalarValue: '39166',
          },
          {
            ScalarValue: '81751',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'female 30',
          },
          {
            ScalarValue: '18315',
          },
          {
            ScalarValue: '11743',
          },
          {
            ScalarValue: '61210',
          },
          {
            ScalarValue: '91269',
          },
          {
            ScalarValue: '1460',
          },
          {
            ScalarValue: '3028',
          },
          {
            ScalarValue: '3423',
          },
          {
            ScalarValue: '7911',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'female 10',
          },
          {
            ScalarValue: '244',
          },
          {
            ScalarValue: '161',
          },
          {
            ScalarValue: '443',
          },
          {
            ScalarValue: '848',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'male 10',
          },
          {
            ScalarValue: '284',
          },
          {
            ScalarValue: '871',
          },
          {
            ScalarValue: '11657',
          },
          {
            ScalarValue: '12812',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'male 70',
          },
          {
            ScalarValue: '8',
          },
          {
            ScalarValue: '9',
          },
          {
            ScalarValue: '18',
          },
          {
            ScalarValue: '35',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'male 0',
          },
          {
            ScalarValue: '94',
          },
          {
            ScalarValue: '108',
          },
          {
            ScalarValue: '1414',
          },
          {
            ScalarValue: '1616',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'female 70',
          },
          {
            ScalarValue: '6',
          },
          {
            ScalarValue: '3',
          },
          {
            ScalarValue: '12',
          },
          {
            ScalarValue: '21',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
        ],
      },
    ],
  },
  [GraphType.ENGAGEMENT_BY_ZONE_AND_DEMOGRAPHIC]: {
    ColumnInfo: [
      {
        Name: 'device_id',
        Type: {
          ScalarType: 'VARCHAR',
        },
      },
      {
        Name: 'gender_age_group',
        Type: {
          ScalarType: 'VARCHAR',
        },
      },
      {
        Name: 'attention',
        Type: {
          ScalarType: 'BIGINT',
        },
      },
    ],
    Rows: [
      {
        Data: [
          {
            ScalarValue: 'FE-xavier-200419',
          },
          {
            ScalarValue: 'female 0',
          },
          {
            ScalarValue: '34',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'FE-xavier-200419',
          },
          {
            ScalarValue: 'female 40',
          },
          {
            ScalarValue: '37',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'FE-xavier-200419',
          },
          {
            ScalarValue: 'female 50',
          },
          {
            ScalarValue: '34',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'FE-xavier-200419',
          },
          {
            ScalarValue: 'male 50',
          },
          {
            ScalarValue: '41',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'FE-xavier-200470',
          },
          {
            ScalarValue: 'male 20',
          },
          {
            ScalarValue: '53',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'FE-xavier-200470',
          },
          {
            ScalarValue: 'male 40',
          },
          {
            ScalarValue: '42',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'FE-xavier-200470-1',
          },
          {
            ScalarValue: 'female 0',
          },
          {
            ScalarValue: '54',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'FE-xavier-200470',
          },
          {
            ScalarValue: 'female 40',
          },
          {
            ScalarValue: '43',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'FE-xavier-200470-1',
          },
          {
            ScalarValue: 'female 20',
          },
          {
            ScalarValue: '39',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'FE-xavier-200470',
          },
          {
            ScalarValue: 'female 0',
          },
          {
            ScalarValue: '49',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'FE-xavier-200470-1',
          },
          {
            ScalarValue: 'female 30',
          },
          {
            ScalarValue: '36',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'FE-xavier-200470-1',
          },
          {
            ScalarValue: 'male 30',
          },
          {
            ScalarValue: '45',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'FE-xavier-200470-1',
          },
          {
            ScalarValue: 'female 40',
          },
          {
            ScalarValue: '48',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'FE-xavier-200470',
          },
          {
            ScalarValue: 'male 0',
          },
          {
            ScalarValue: '50',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'FE-xavier-200470-1',
          },
          {
            ScalarValue: 'male 20',
          },
          {
            ScalarValue: '45',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'FE-xavier-200470-1',
          },
          {
            ScalarValue: 'male 40',
          },
          {
            ScalarValue: '46',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'FE-xavier-200419',
          },
          {
            ScalarValue: 'male 60',
          },
          {
            ScalarValue: '61',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'FE-xavier-200419',
          },
          {
            ScalarValue: 'male 20',
          },
          {
            ScalarValue: '55',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'FE-xavier-200419',
          },
          {
            ScalarValue: 'male 40',
          },
          {
            ScalarValue: '42',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'FE-xavier-200419',
          },
          {
            ScalarValue: 'male 30',
          },
          {
            ScalarValue: '42',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'FE-xavier-200419',
          },
          {
            ScalarValue: 'male 10',
          },
          {
            ScalarValue: '64',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'FE-xavier-200470',
          },
          {
            ScalarValue: 'male 50',
          },
          {
            ScalarValue: '35',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'FE-xavier-200419',
          },
          {
            ScalarValue: 'female 30',
          },
          {
            ScalarValue: '53',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'FE-xavier-200470',
          },
          {
            ScalarValue: 'female 50',
          },
          {
            ScalarValue: '45',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'FE-xavier-200419',
          },
          {
            ScalarValue: 'female 10',
          },
          {
            ScalarValue: '58',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'FE-xavier-200419',
          },
          {
            ScalarValue: 'female 20',
          },
          {
            ScalarValue: '43',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'FE-xavier-200470-1',
          },
          {
            ScalarValue: 'male 0',
          },
          {
            ScalarValue: '31',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'FE-xavier-200419',
          },
          {
            ScalarValue: 'male 70',
          },
          {
            ScalarValue: '47',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'FE-xavier-200419',
          },
          {
            ScalarValue: 'male 0',
          },
          {
            ScalarValue: '63',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'FE-xavier-200419',
          },
          {
            ScalarValue: 'female 70',
          },
          {
            ScalarValue: '40',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'FE-xavier-200470',
          },
          {
            ScalarValue: 'female 20',
          },
          {
            ScalarValue: '48',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'FE-xavier-200470',
          },
          {
            ScalarValue: 'male 30',
          },
          {
            ScalarValue: '55',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'FE-xavier-200470',
          },
          {
            ScalarValue: 'female 30',
          },
          {
            ScalarValue: '50',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'FE-xavier-200470',
          },
          {
            ScalarValue: 'female 10',
          },
          {
            ScalarValue: '60',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'FE-xavier-200470',
          },
          {
            ScalarValue: 'male 10',
          },
          {
            ScalarValue: '61',
          },
        ],
      },
    ],
  },
  [GraphType.POSITIVE_EMOTIONS]: {
    $metadata: {
      httpStatusCode: 200,
      requestId: 'NCWFWHPULZPJ2CQY54RHXOOOE4',
      attempts: 1,
      totalRetryDelay: 0,
    },
    ColumnInfo: [
      {
        Name: 'time',
        Type: {
          ScalarType: 'VARCHAR',
        },
      },
      {
        Name: 'happy',
        Type: {
          ScalarType: 'BIGINT',
        },
      },
    ],
    QueryId: 'AEFACANDO3VOFWWGJEZXQSQGAFM4PIYKASAVEEEWZNQB7EJB4IEWO3L6DOZSDMI',
    QueryStatus: {
      CumulativeBytesMetered: 122021619,
      CumulativeBytesScanned: 122021619,
      ProgressPercentage: 100,
    },
    Rows: [
      {
        Data: [
          {
            ScalarValue: '2022-02-01T04:48:00',
          },
          {
            ScalarValue: '21',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-01T17:45:36',
          },
          {
            ScalarValue: '45',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-02T06:43:12',
          },
          {
            ScalarValue: '32',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-02T19:40:48',
          },
          {
            ScalarValue: '0',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-03T08:38:24',
          },
          {
            ScalarValue: '7',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-03T21:36:00',
          },
          {
            ScalarValue: '0',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-04T10:33:36',
          },
          {
            ScalarValue: '3',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-04T23:31:12',
          },
          {
            ScalarValue: '0',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-05T12:28:48',
          },
          {
            ScalarValue: '0',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-06T01:26:24',
          },
          {
            ScalarValue: '0',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-06T14:24:00',
          },
          {
            ScalarValue: '0',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-07T03:21:36',
          },
          {
            ScalarValue: '14',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-07T16:19:12',
          },
          {
            ScalarValue: '12',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-08T05:16:48',
          },
          {
            ScalarValue: '9',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-08T18:14:24',
          },
          {
            ScalarValue: '9',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-09T07:12:00',
          },
          {
            ScalarValue: '24',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-09T20:09:36',
          },
          {
            ScalarValue: '0',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-10T09:07:12',
          },
          {
            ScalarValue: '20',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-10T22:04:48',
          },
          {
            ScalarValue: '16',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-11T11:02:24',
          },
          {
            ScalarValue: '21',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-12T00:00:00',
          },
          {
            ScalarValue: '33',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-12T12:57:36',
          },
          {
            ScalarValue: '0',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-13T01:55:12',
          },
          {
            ScalarValue: '0',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-13T14:52:48',
          },
          {
            ScalarValue: '0',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-14T03:50:24',
          },
          {
            ScalarValue: '16',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-14T16:48:00',
          },
          {
            ScalarValue: '10',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-15T05:45:36',
          },
          {
            ScalarValue: '22',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-15T18:43:12',
          },
          {
            ScalarValue: '20',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-16T07:40:48',
          },
          {
            ScalarValue: '16',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-16T20:38:24',
          },
          {
            ScalarValue: '23',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-17T09:36:00',
          },
          {
            ScalarValue: '13',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-17T22:33:36',
          },
          {
            ScalarValue: '15',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-18T11:31:12',
          },
          {
            ScalarValue: '17',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-19T00:28:48',
          },
          {
            ScalarValue: '0',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-19T13:26:24',
          },
          {
            ScalarValue: '33',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-20T02:24:00',
          },
          {
            ScalarValue: '28',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-20T15:21:36',
          },
          {
            ScalarValue: '0',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-21T04:19:12',
          },
          {
            ScalarValue: '13',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-21T17:16:48',
          },
          {
            ScalarValue: '3',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-22T06:14:24',
          },
          {
            ScalarValue: '23',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-22T19:12:00',
          },
          {
            ScalarValue: '0',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-23T08:09:36',
          },
          {
            ScalarValue: '23',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-23T21:07:12',
          },
          {
            ScalarValue: '0',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-24T10:04:48',
          },
          {
            ScalarValue: '0',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-24T23:02:24',
          },
          {
            ScalarValue: '0',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-25T12:00:00',
          },
          {
            ScalarValue: '0',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-26T00:57:36',
          },
          {
            ScalarValue: '0',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-26T13:55:12',
          },
          {
            ScalarValue: '0',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-27T02:52:48',
          },
          {
            ScalarValue: '0',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-27T15:50:24',
          },
          {
            ScalarValue: '0',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-28T04:48:00',
          },
          {
            ScalarValue: '0',
          },
        ],
      },
    ],
  },
  [GraphType.ZONE_DEMOGRAPHIC_SPLIT]: {
    $metadata: {
      httpStatusCode: 200,
      requestId: 'YYM67MMYJ3XTNF366AXEORZW5U',
      attempts: 1,
      totalRetryDelay: 0,
    },
    ColumnInfo: [
      {
        Name: 'device_id',
        Type: {
          ScalarType: 'VARCHAR',
        },
      },
      {
        Name: 'total',
        Type: {
          ScalarType: 'BIGINT',
        },
      },
      {
        Name: 'gender_age_group',
        Type: {
          ScalarType: 'VARCHAR',
        },
      },
    ],
    QueryId: 'AEFACANDO3VM5KSAPHUGOWKND5YV4CEY5NTJE7ET7AY3EQ2SBFF4PM25ZGDVAKI',
    QueryStatus: {
      CumulativeBytesMetered: 122021619,
      CumulativeBytesScanned: 122021619,
      ProgressPercentage: 100,
    },
    Rows: [
      {
        Data: [
          {
            ScalarValue: 'FE-xavier-200470',
          },
          {
            ScalarValue: '112',
          },
          {
            ScalarValue: 'female 50',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'FE-xavier-200470-1',
          },
          {
            ScalarValue: '376',
          },
          {
            ScalarValue: 'female 20',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'FE-xavier-200470',
          },
          {
            ScalarValue: '176',
          },
          {
            ScalarValue: 'female 40',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'FE-xavier-200470',
          },
          {
            ScalarValue: '88',
          },
          {
            ScalarValue: 'female 0',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'FE-xavier-200470-1',
          },
          {
            ScalarValue: '4',
          },
          {
            ScalarValue: 'female 30',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'FE-xavier-200419',
          },
          {
            ScalarValue: '843',
          },
          {
            ScalarValue: 'female 10',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'FE-xavier-200419',
          },
          {
            ScalarValue: '99056',
          },
          {
            ScalarValue: 'female 30',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'FE-xavier-200470',
          },
          {
            ScalarValue: '178',
          },
          {
            ScalarValue: 'male 50',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'FE-xavier-200419',
          },
          {
            ScalarValue: '123485',
          },
          {
            ScalarValue: 'male 30',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'FE-xavier-200470-1',
          },
          {
            ScalarValue: '10',
          },
          {
            ScalarValue: 'male 30',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'FE-xavier-200419',
          },
          {
            ScalarValue: '12798',
          },
          {
            ScalarValue: 'male 10',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'FE-xavier-200419',
          },
          {
            ScalarValue: '369026',
          },
          {
            ScalarValue: 'female 20',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'FE-xavier-200419',
          },
          {
            ScalarValue: '21',
          },
          {
            ScalarValue: 'female 70',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'FE-xavier-200470',
          },
          {
            ScalarValue: '14015',
          },
          {
            ScalarValue: 'female 20',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'FE-xavier-200470-1',
          },
          {
            ScalarValue: '2',
          },
          {
            ScalarValue: 'female 0',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'FE-xavier-200419',
          },
          {
            ScalarValue: '1562',
          },
          {
            ScalarValue: 'female 50',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'FE-xavier-200419',
          },
          {
            ScalarValue: '3257',
          },
          {
            ScalarValue: 'male 50',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'FE-xavier-200470',
          },
          {
            ScalarValue: '1112',
          },
          {
            ScalarValue: 'male 20',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'FE-xavier-200470',
          },
          {
            ScalarValue: '529',
          },
          {
            ScalarValue: 'male 40',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'FE-xavier-200419',
          },
          {
            ScalarValue: '452',
          },
          {
            ScalarValue: 'female 0',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'FE-xavier-200470',
          },
          {
            ScalarValue: '14',
          },
          {
            ScalarValue: 'male 10',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'FE-xavier-200470',
          },
          {
            ScalarValue: '120',
          },
          {
            ScalarValue: 'female 30',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'FE-xavier-200470',
          },
          {
            ScalarValue: '5',
          },
          {
            ScalarValue: 'female 10',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'FE-xavier-200470-1',
          },
          {
            ScalarValue: '1',
          },
          {
            ScalarValue: 'male 0',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'FE-xavier-200470',
          },
          {
            ScalarValue: '565',
          },
          {
            ScalarValue: 'male 30',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'FE-xavier-200419',
          },
          {
            ScalarValue: '35',
          },
          {
            ScalarValue: 'male 70',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'FE-xavier-200419',
          },
          {
            ScalarValue: '1558',
          },
          {
            ScalarValue: 'male 0',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'FE-xavier-200470',
          },
          {
            ScalarValue: '57',
          },
          {
            ScalarValue: 'male 0',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'FE-xavier-200470-1',
          },
          {
            ScalarValue: '9',
          },
          {
            ScalarValue: 'male 40',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'FE-xavier-200419',
          },
          {
            ScalarValue: '1',
          },
          {
            ScalarValue: 'male 60',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'FE-xavier-200419',
          },
          {
            ScalarValue: '4230',
          },
          {
            ScalarValue: 'female 40',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'FE-xavier-200419',
          },
          {
            ScalarValue: '209307',
          },
          {
            ScalarValue: 'male 20',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'FE-xavier-200419',
          },
          {
            ScalarValue: '23752',
          },
          {
            ScalarValue: 'male 40',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'FE-xavier-200470-1',
          },
          {
            ScalarValue: '1',
          },
          {
            ScalarValue: 'female 40',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'FE-xavier-200470-1',
          },
          {
            ScalarValue: '56',
          },
          {
            ScalarValue: 'male 20',
          },
        ],
      },
    ],
  },
  [GraphType.ENGAGEMENT_BY_DEMOGRAPHIC_OVERTIME]: {
    $metadata: {
      httpStatusCode: 200,
      requestId: 'B4G4PATZSOKPZTDZZ35FQ7RZV4',
      attempts: 1,
      totalRetryDelay: 0,
    },
    ColumnInfo: [
      {
        Name: 'time',
        Type: {
          ScalarType: 'VARCHAR',
        },
      },
      {
        Name: 'age_20',
        Type: {
          ScalarType: 'BIGINT',
        },
      },
      {
        Name: 'count_age_20',
        Type: {
          ScalarType: 'BIGINT',
        },
      },
      {
        Name: 'age_30',
        Type: {
          ScalarType: 'BIGINT',
        },
      },
      {
        Name: 'count_age_30',
        Type: {
          ScalarType: 'BIGINT',
        },
      },
      {
        Name: 'age_40',
        Type: {
          ScalarType: 'BIGINT',
        },
      },
      {
        Name: 'count_age_40',
        Type: {
          ScalarType: 'BIGINT',
        },
      },
      {
        Name: 'age_50',
        Type: {
          ScalarType: 'BIGINT',
        },
      },
      {
        Name: 'count_age_50',
        Type: {
          ScalarType: 'BIGINT',
        },
      },
      {
        Name: 'age_60',
        Type: {
          ScalarType: 'BIGINT',
        },
      },
      {
        Name: 'count_age_60',
        Type: {
          ScalarType: 'BIGINT',
        },
      },
    ],
    QueryId: 'AEFACANDO3VFART6A7MYHZGP5BEQI2MXLRRBQFU6OIDYSGHS3QM77NOCP7FUFNQ',
    QueryStatus: {
      CumulativeBytesMetered: 122021619,
      CumulativeBytesScanned: 122021619,
      ProgressPercentage: 100,
    },
    Rows: [
      {
        Data: [
          {
            ScalarValue: '2022-02-01T04:48:00',
          },
          {
            ScalarValue: '1056568',
          },
          {
            ScalarValue: '17795',
          },
          {
            ScalarValue: '408581',
          },
          {
            ScalarValue: '7600',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-01T17:45:36',
          },
          {
            ScalarValue: '14266419',
          },
          {
            ScalarValue: '243118',
          },
          {
            ScalarValue: '4714644',
          },
          {
            ScalarValue: '85724',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-02T06:43:12',
          },
          {
            ScalarValue: '1376403',
          },
          {
            ScalarValue: '21848',
          },
          {
            ScalarValue: '1660807',
          },
          {
            ScalarValue: '30085',
          },
          {
            ScalarValue: '595',
          },
          {
            ScalarValue: '15',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-02T19:40:48',
          },
          {
            ScalarValue: '1538',
          },
          {
            ScalarValue: '23',
          },
          {
            ScalarValue: '316',
          },
          {
            ScalarValue: '7',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-03T08:38:24',
          },
          {
            ScalarValue: '5005',
          },
          {
            ScalarValue: '125',
          },
          {
            ScalarValue: '7978',
          },
          {
            ScalarValue: '188',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-03T21:36:00',
          },
          {
            ScalarValue: '345659',
          },
          {
            ScalarValue: '4988',
          },
          {
            ScalarValue: '14097',
          },
          {
            ScalarValue: '198',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-04T10:33:36',
          },
          {
            ScalarValue: '1964164',
          },
          {
            ScalarValue: '30200',
          },
          {
            ScalarValue: '119498',
          },
          {
            ScalarValue: '1799',
          },
          {
            ScalarValue: '63',
          },
          {
            ScalarValue: '1',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-04T23:31:12',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-05T12:28:48',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-06T01:26:24',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-06T14:24:00',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-07T03:21:36',
          },
          {
            ScalarValue: '460890',
          },
          {
            ScalarValue: '8886',
          },
          {
            ScalarValue: '297387',
          },
          {
            ScalarValue: '6899',
          },
          {
            ScalarValue: '103473',
          },
          {
            ScalarValue: '2305',
          },
          {
            ScalarValue: '3761',
          },
          {
            ScalarValue: '83',
          },
          {
            ScalarValue: '61',
          },
          {
            ScalarValue: '1',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-07T16:19:12',
          },
          {
            ScalarValue: '21797',
          },
          {
            ScalarValue: '515',
          },
          {
            ScalarValue: '2586',
          },
          {
            ScalarValue: '48',
          },
          {
            ScalarValue: '2612',
          },
          {
            ScalarValue: '47',
          },
          {
            ScalarValue: '714',
          },
          {
            ScalarValue: '13',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-08T05:16:48',
          },
          {
            ScalarValue: '1064802',
          },
          {
            ScalarValue: '22395',
          },
          {
            ScalarValue: '972205',
          },
          {
            ScalarValue: '21315',
          },
          {
            ScalarValue: '156001',
          },
          {
            ScalarValue: '2997',
          },
          {
            ScalarValue: '14064',
          },
          {
            ScalarValue: '341',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-08T18:14:24',
          },
          {
            ScalarValue: '777',
          },
          {
            ScalarValue: '15',
          },
          {
            ScalarValue: '1237',
          },
          {
            ScalarValue: '20',
          },
          {
            ScalarValue: '4227',
          },
          {
            ScalarValue: '59',
          },
          {
            ScalarValue: '85',
          },
          {
            ScalarValue: '1',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-09T07:12:00',
          },
          {
            ScalarValue: '565552',
          },
          {
            ScalarValue: '12082',
          },
          {
            ScalarValue: '476956',
          },
          {
            ScalarValue: '11598',
          },
          {
            ScalarValue: '133127',
          },
          {
            ScalarValue: '2991',
          },
          {
            ScalarValue: '16989',
          },
          {
            ScalarValue: '452',
          },
          {
            ScalarValue: '112',
          },
          {
            ScalarValue: '2',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-09T20:09:36',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-10T09:07:12',
          },
          {
            ScalarValue: '1611231',
          },
          {
            ScalarValue: '41252',
          },
          {
            ScalarValue: '692149',
          },
          {
            ScalarValue: '16182',
          },
          {
            ScalarValue: '329180',
          },
          {
            ScalarValue: '7880',
          },
          {
            ScalarValue: '125111',
          },
          {
            ScalarValue: '3158',
          },
          {
            ScalarValue: '2169',
          },
          {
            ScalarValue: '49',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-10T22:04:48',
          },
          {
            ScalarValue: '223033',
          },
          {
            ScalarValue: '5626',
          },
          {
            ScalarValue: '12092',
          },
          {
            ScalarValue: '324',
          },
          {
            ScalarValue: '7056',
          },
          {
            ScalarValue: '155',
          },
          {
            ScalarValue: '2446',
          },
          {
            ScalarValue: '61',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-11T11:02:24',
          },
          {
            ScalarValue: '1032127',
          },
          {
            ScalarValue: '33762',
          },
          {
            ScalarValue: '64325',
          },
          {
            ScalarValue: '2067',
          },
          {
            ScalarValue: '27854',
          },
          {
            ScalarValue: '844',
          },
          {
            ScalarValue: '9054',
          },
          {
            ScalarValue: '217',
          },
          {
            ScalarValue: '212',
          },
          {
            ScalarValue: '5',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-12T00:00:00',
          },
          {
            ScalarValue: '59',
          },
          {
            ScalarValue: '2',
          },
          {
            ScalarValue: '53',
          },
          {
            ScalarValue: '1',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-12T12:57:36',
          },
          {
            ScalarValue: '30',
          },
          {
            ScalarValue: '1',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '44',
          },
          {
            ScalarValue: '1',
          },
          {
            ScalarValue: '84',
          },
          {
            ScalarValue: '1',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-13T01:55:12',
          },
          {
            ScalarValue: '6',
          },
          {
            ScalarValue: '1',
          },
          {
            ScalarValue: '64',
          },
          {
            ScalarValue: '2',
          },
          {
            ScalarValue: '68',
          },
          {
            ScalarValue: '1',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-13T14:52:48',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-14T03:50:24',
          },
          {
            ScalarValue: '973894',
          },
          {
            ScalarValue: '36334',
          },
          {
            ScalarValue: '66589',
          },
          {
            ScalarValue: '2466',
          },
          {
            ScalarValue: '23053',
          },
          {
            ScalarValue: '631',
          },
          {
            ScalarValue: '4857',
          },
          {
            ScalarValue: '172',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-14T16:48:00',
          },
          {
            ScalarValue: '104419',
          },
          {
            ScalarValue: '4869',
          },
          {
            ScalarValue: '9235',
          },
          {
            ScalarValue: '417',
          },
          {
            ScalarValue: '1950',
          },
          {
            ScalarValue: '68',
          },
          {
            ScalarValue: '278',
          },
          {
            ScalarValue: '11',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-15T05:45:36',
          },
          {
            ScalarValue: '691550',
          },
          {
            ScalarValue: '16120',
          },
          {
            ScalarValue: '150023',
          },
          {
            ScalarValue: '3715',
          },
          {
            ScalarValue: '47529',
          },
          {
            ScalarValue: '1215',
          },
          {
            ScalarValue: '2040',
          },
          {
            ScalarValue: '54',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-15T18:43:12',
          },
          {
            ScalarValue: '623',
          },
          {
            ScalarValue: '16',
          },
          {
            ScalarValue: '869',
          },
          {
            ScalarValue: '14',
          },
          {
            ScalarValue: '584',
          },
          {
            ScalarValue: '10',
          },
          {
            ScalarValue: '232',
          },
          {
            ScalarValue: '4',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-16T07:40:48',
          },
          {
            ScalarValue: '918233',
          },
          {
            ScalarValue: '31016',
          },
          {
            ScalarValue: '52626',
          },
          {
            ScalarValue: '1523',
          },
          {
            ScalarValue: '15936',
          },
          {
            ScalarValue: '389',
          },
          {
            ScalarValue: '1215',
          },
          {
            ScalarValue: '35',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-16T20:38:24',
          },
          {
            ScalarValue: '11351',
          },
          {
            ScalarValue: '358',
          },
          {
            ScalarValue: '26417',
          },
          {
            ScalarValue: '1264',
          },
          {
            ScalarValue: '7169',
          },
          {
            ScalarValue: '220',
          },
          {
            ScalarValue: '607',
          },
          {
            ScalarValue: '17',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-17T09:36:00',
          },
          {
            ScalarValue: '319670',
          },
          {
            ScalarValue: '14219',
          },
          {
            ScalarValue: '279728',
          },
          {
            ScalarValue: '14588',
          },
          {
            ScalarValue: '68076',
          },
          {
            ScalarValue: '2180',
          },
          {
            ScalarValue: '2970',
          },
          {
            ScalarValue: '68',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-17T22:33:36',
          },
          {
            ScalarValue: '146817',
          },
          {
            ScalarValue: '4591',
          },
          {
            ScalarValue: '9715',
          },
          {
            ScalarValue: '316',
          },
          {
            ScalarValue: '5123',
          },
          {
            ScalarValue: '134',
          },
          {
            ScalarValue: '1147',
          },
          {
            ScalarValue: '34',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-18T11:31:12',
          },
          {
            ScalarValue: '189789',
          },
          {
            ScalarValue: '7285',
          },
          {
            ScalarValue: '11387',
          },
          {
            ScalarValue: '410',
          },
          {
            ScalarValue: '3465',
          },
          {
            ScalarValue: '113',
          },
          {
            ScalarValue: '2240',
          },
          {
            ScalarValue: '55',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-19T00:28:48',
          },
          {
            ScalarValue: '49',
          },
          {
            ScalarValue: '1',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-19T13:26:24',
          },
          {
            ScalarValue: '82',
          },
          {
            ScalarValue: '3',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-20T02:24:00',
          },
          {
            ScalarValue: '131',
          },
          {
            ScalarValue: '4',
          },
          {
            ScalarValue: '48',
          },
          {
            ScalarValue: '2',
          },
          {
            ScalarValue: '54',
          },
          {
            ScalarValue: '1',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-20T15:21:36',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-21T04:19:12',
          },
          {
            ScalarValue: '875234',
          },
          {
            ScalarValue: '28429',
          },
          {
            ScalarValue: '121750',
          },
          {
            ScalarValue: '4175',
          },
          {
            ScalarValue: '41843',
          },
          {
            ScalarValue: '1171',
          },
          {
            ScalarValue: '8927',
          },
          {
            ScalarValue: '220',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-21T17:16:48',
          },
          {
            ScalarValue: '14542',
          },
          {
            ScalarValue: '401',
          },
          {
            ScalarValue: '4753',
          },
          {
            ScalarValue: '99',
          },
          {
            ScalarValue: '2247',
          },
          {
            ScalarValue: '48',
          },
          {
            ScalarValue: '483',
          },
          {
            ScalarValue: '11',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-22T06:14:24',
          },
          {
            ScalarValue: '2617',
          },
          {
            ScalarValue: '67',
          },
          {
            ScalarValue: '23297',
          },
          {
            ScalarValue: '575',
          },
          {
            ScalarValue: '1480',
          },
          {
            ScalarValue: '32',
          },
          {
            ScalarValue: '141',
          },
          {
            ScalarValue: '2',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-22T19:12:00',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-23T08:09:36',
          },
          {
            ScalarValue: '284579',
          },
          {
            ScalarValue: '7545',
          },
          {
            ScalarValue: '444516',
          },
          {
            ScalarValue: '9619',
          },
          {
            ScalarValue: '219799',
          },
          {
            ScalarValue: '5189',
          },
          {
            ScalarValue: '4068',
          },
          {
            ScalarValue: '99',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-23T21:07:12',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-24T10:04:48',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-24T23:02:24',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-25T12:00:00',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-26T00:57:36',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-26T13:55:12',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-27T02:52:48',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-27T15:50:24',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-28T04:48:00',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
        ],
      },
    ],
  },
  [GraphType.NEGATIVE_EMOTIONS]: {
    $metadata: {
      httpStatusCode: 200,
      requestId: 'WTNLKRJ3Y4ZWLYDOBEQ3LYIFRI',
      attempts: 1,
      totalRetryDelay: 0,
    },
    ColumnInfo: [
      {
        Name: 'time',
        Type: {
          ScalarType: 'VARCHAR',
        },
      },
      {
        Name: 'sad',
        Type: {
          ScalarType: 'BIGINT',
        },
      },
    ],
    QueryId: 'AEFACANDO3VHYXXWSS3XLCSALEB2BVTQHD7X6RVEKAEBS5EHVRBF37FCNVZCGUQ',
    QueryStatus: {
      CumulativeBytesMetered: 122021619,
      CumulativeBytesScanned: 122021619,
      ProgressPercentage: 100,
    },
    Rows: [
      {
        Data: [
          {
            ScalarValue: '2022-02-01T04:48:00',
          },
          {
            ScalarValue: '53',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-01T17:45:36',
          },
          {
            ScalarValue: '23',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-02T06:43:12',
          },
          {
            ScalarValue: '31',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-02T19:40:48',
          },
          {
            ScalarValue: '96',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-03T08:38:24',
          },
          {
            ScalarValue: '83',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-03T21:36:00',
          },
          {
            ScalarValue: '93',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-04T10:33:36',
          },
          {
            ScalarValue: '80',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-04T23:31:12',
          },
          {
            ScalarValue: '0',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-05T12:28:48',
          },
          {
            ScalarValue: '0',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-06T01:26:24',
          },
          {
            ScalarValue: '0',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-06T14:24:00',
          },
          {
            ScalarValue: '0',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-07T03:21:36',
          },
          {
            ScalarValue: '77',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-07T16:19:12',
          },
          {
            ScalarValue: '85',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-08T05:16:48',
          },
          {
            ScalarValue: '78',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-08T18:14:24',
          },
          {
            ScalarValue: '20',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-09T07:12:00',
          },
          {
            ScalarValue: '44',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-09T20:09:36',
          },
          {
            ScalarValue: '0',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-10T09:07:12',
          },
          {
            ScalarValue: '15',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-10T22:04:48',
          },
          {
            ScalarValue: '16',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-11T11:02:24',
          },
          {
            ScalarValue: '43',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-12T00:00:00',
          },
          {
            ScalarValue: '0',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-12T12:57:36',
          },
          {
            ScalarValue: '0',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-13T01:55:12',
          },
          {
            ScalarValue: '0',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-13T14:52:48',
          },
          {
            ScalarValue: '0',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-14T03:50:24',
          },
          {
            ScalarValue: '42',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-14T16:48:00',
          },
          {
            ScalarValue: '66',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-15T05:45:36',
          },
          {
            ScalarValue: '18',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-15T18:43:12',
          },
          {
            ScalarValue: '2',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-16T07:40:48',
          },
          {
            ScalarValue: '62',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-16T20:38:24',
          },
          {
            ScalarValue: '24',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-17T09:36:00',
          },
          {
            ScalarValue: '35',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-17T22:33:36',
          },
          {
            ScalarValue: '24',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-18T11:31:12',
          },
          {
            ScalarValue: '42',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-19T00:28:48',
          },
          {
            ScalarValue: '0',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-19T13:26:24',
          },
          {
            ScalarValue: '0',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-20T02:24:00',
          },
          {
            ScalarValue: '0',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-20T15:21:36',
          },
          {
            ScalarValue: '0',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-21T04:19:12',
          },
          {
            ScalarValue: '47',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-21T17:16:48',
          },
          {
            ScalarValue: '51',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-22T06:14:24',
          },
          {
            ScalarValue: '11',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-22T19:12:00',
          },
          {
            ScalarValue: '0',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-23T08:09:36',
          },
          {
            ScalarValue: '31',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-23T21:07:12',
          },
          {
            ScalarValue: '0',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-24T10:04:48',
          },
          {
            ScalarValue: '0',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-24T23:02:24',
          },
          {
            ScalarValue: '0',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-25T12:00:00',
          },
          {
            ScalarValue: '0',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-26T00:57:36',
          },
          {
            ScalarValue: '0',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-26T13:55:12',
          },
          {
            ScalarValue: '0',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-27T02:52:48',
          },
          {
            ScalarValue: '0',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-27T15:50:24',
          },
          {
            ScalarValue: '0',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-28T04:48:00',
          },
          {
            ScalarValue: '0',
          },
        ],
      },
    ],
  },
  [GraphType.GENDER_SPLIT]: {
    $metadata: {
      httpStatusCode: 200,
      requestId: 'M3DB5577LVF5SPZJRL2OU57YKE',
      attempts: 1,
      totalRetryDelay: 0,
    },
    ColumnInfo: [
      {
        Name: 'gender',
        Type: {
          ScalarType: 'VARCHAR',
        },
      },
      {
        Name: 'total',
        Type: {
          ScalarType: 'BIGINT',
        },
      },
    ],
    QueryId: 'AEFACANDO3VDYIHNKFARTVI4WVQV2RR5RNYVCBJ7R2AL7FUEZM2CJ26RHKA533Y',
    QueryStatus: {
      CumulativeBytesMetered: 122021619,
      CumulativeBytesScanned: 122021619,
      ProgressPercentage: 100,
    },
    Rows: [
      {
        Data: [
          {
            ScalarValue: 'male',
          },
          {
            ScalarValue: '376724',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'female',
          },
          {
            ScalarValue: '490089',
          },
        ],
      },
    ],
  },
  [GraphType.ENGAGEMENT_CHANGE_BY_DEMOGRAPHIC]: {
    $metadata: {
      httpStatusCode: 200,
      requestId: 'URWMFWSOTK73HSSGLWHJ6NZ2S4',
      attempts: 1,
      totalRetryDelay: 0,
    },
    ColumnInfo: [
      {
        Name: 'gender_age_group',
        Type: {
          ScalarType: 'VARCHAR',
        },
      },
      {
        Name: 'prev_attention',
        Type: {
          ScalarType: 'BIGINT',
        },
      },
      {
        Name: 'current_attention',
        Type: {
          ScalarType: 'BIGINT',
        },
      },
    ],
    QueryId: 'AEFACANDO3VBRHTLVF4ZGQTCNJBRWLGETKRJ6DQ7RPK43S73QXTFQTKSFHQQ7SY',
    QueryStatus: {
      CumulativeBytesMetered: 122021619,
      CumulativeBytesScanned: 122021619,
      ProgressPercentage: 100,
    },
    Rows: [
      {
        Data: [
          {
            ScalarValue: 'female 50',
          },
          {
            ScalarValue: '34',
          },
          {
            ScalarValue: '37',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'male 20',
          },
          {
            ScalarValue: '58',
          },
          {
            ScalarValue: '32',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'male 70',
          },
          {
            ScalarValue: '47',
          },
          {
            ScalarValue: '0',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'male 0',
          },
          {
            ScalarValue: '63',
          },
          {
            ScalarValue: '0',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'female 70',
          },
          {
            ScalarValue: '40',
          },
          {
            ScalarValue: '0',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'male 40',
          },
          {
            ScalarValue: '45',
          },
          {
            ScalarValue: '38',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'female 40',
          },
          {
            ScalarValue: '35',
          },
          {
            ScalarValue: '39',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'male 60',
          },
          {
            ScalarValue: '61',
          },
          {
            ScalarValue: '0',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'male 50',
          },
          {
            ScalarValue: '41',
          },
          {
            ScalarValue: '43',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'female 0',
          },
          {
            ScalarValue: '37',
          },
          {
            ScalarValue: '0',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'male 30',
          },
          {
            ScalarValue: '47',
          },
          {
            ScalarValue: '28',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'female 20',
          },
          {
            ScalarValue: '47',
          },
          {
            ScalarValue: '30',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'female 30',
          },
          {
            ScalarValue: '54',
          },
          {
            ScalarValue: '38',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'female 10',
          },
          {
            ScalarValue: '58',
          },
          {
            ScalarValue: '0',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'male 10',
          },
          {
            ScalarValue: '64',
          },
          {
            ScalarValue: '0',
          },
        ],
      },
    ],
  },
  [GraphType.ENGAGEMENT_DISTRIBUTION]: {
    $metadata: {
      httpStatusCode: 200,
      requestId: 'PF7BDY3L7XGWO6ROYSSLQSVU7E',
      attempts: 1,
      totalRetryDelay: 0,
    },
    ColumnInfo: [
      {
        Name: 'total',
        Type: {
          ScalarType: 'BIGINT',
        },
      },
      {
        Name: 'very_high',
        Type: {
          ScalarType: 'BIGINT',
        },
      },
      {
        Name: 'high',
        Type: {
          ScalarType: 'BIGINT',
        },
      },
      {
        Name: 'medium',
        Type: {
          ScalarType: 'BIGINT',
        },
      },
      {
        Name: 'low',
        Type: {
          ScalarType: 'BIGINT',
        },
      },
      {
        Name: 'very_low',
        Type: {
          ScalarType: 'BIGINT',
        },
      },
    ],
    QueryId: 'AEFACANDO3VDXUIFBP5EYDJQJ2AX5JUFK6IMGC4QMGIKBAF2BF2FAB4KOTPDEUI',
    QueryStatus: {
      CumulativeBytesMetered: 122021619,
      CumulativeBytesScanned: 122021619,
      ProgressPercentage: 100,
    },
    Rows: [
      {
        Data: [
          {
            ScalarValue: '866813',
          },
          {
            ScalarValue: '5690',
          },
          {
            ScalarValue: '75328',
          },
          {
            ScalarValue: '402087',
          },
          {
            ScalarValue: '235658',
          },
          {
            ScalarValue: '148050',
          },
        ],
      },
    ],
  },
  [GraphType.ENGAGEMENT_BY_AGE_GROUP]: {
    $metadata: {
      httpStatusCode: 200,
      requestId: 'KKJ3RCCTHYVWK2PYPVZQXYFRYM',
      attempts: 1,
      totalRetryDelay: 0,
    },
    ColumnInfo: [
      {
        Name: 'gender',
        Type: {
          ScalarType: 'VARCHAR',
        },
      },
      {
        Name: 'age_group',
        Type: {
          ScalarType: 'INTEGER',
        },
      },
      {
        Name: 'total',
        Type: {
          ScalarType: 'BIGINT',
        },
      },
    ],
    QueryId: 'AEFACANDO3VJEQ7DUB5V5P24SDTECFHDDB7C3UILTDXPGMLM7W75X442DQSUGIQ',
    QueryStatus: {
      CumulativeBytesMetered: 122021619,
      CumulativeBytesScanned: 122021619,
      ProgressPercentage: 100,
    },
    Rows: [
      {
        Data: [
          {
            ScalarValue: 'female',
          },
          {
            ScalarValue: '30',
          },
          {
            ScalarValue: '99180',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'female',
          },
          {
            ScalarValue: '20',
          },
          {
            ScalarValue: '383417',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'male',
          },
          {
            ScalarValue: '50',
          },
          {
            ScalarValue: '3435',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'male',
          },
          {
            ScalarValue: '60',
          },
          {
            ScalarValue: '1',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'female',
          },
          {
            ScalarValue: '10',
          },
          {
            ScalarValue: '848',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'male',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '1616',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'male',
          },
          {
            ScalarValue: '70',
          },
          {
            ScalarValue: '35',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'female',
          },
          {
            ScalarValue: '40',
          },
          {
            ScalarValue: '4407',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'male',
          },
          {
            ScalarValue: '30',
          },
          {
            ScalarValue: '124060',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'female',
          },
          {
            ScalarValue: '50',
          },
          {
            ScalarValue: '1674',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'female',
          },
          {
            ScalarValue: '70',
          },
          {
            ScalarValue: '21',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'male',
          },
          {
            ScalarValue: '10',
          },
          {
            ScalarValue: '12812',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'female',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '542',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'male',
          },
          {
            ScalarValue: '40',
          },
          {
            ScalarValue: '24290',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'male',
          },
          {
            ScalarValue: '20',
          },
          {
            ScalarValue: '210475',
          },
        ],
      },
    ],
  },
  [GraphType.ZONE_EMOTION_SPLIT]: {
    $metadata: {
      httpStatusCode: 200,
      requestId: '5EIM3FLITBKOA2D5JIRIPMWR64',
      attempts: 1,
      totalRetryDelay: 0,
    },
    ColumnInfo: [
      {
        Name: 'device_id',
        Type: {
          ScalarType: 'VARCHAR',
        },
      },
      {
        Name: 'total',
        Type: {
          ScalarType: 'BIGINT',
        },
      },
      {
        Name: 'happy',
        Type: {
          ScalarType: 'BIGINT',
        },
      },
      {
        Name: 'neutral',
        Type: {
          ScalarType: 'BIGINT',
        },
      },
      {
        Name: 'sad',
        Type: {
          ScalarType: 'BIGINT',
        },
      },
    ],
    QueryId: 'AEFACANDO3VN3GDGSAUGQ2F35YOFCYWJ2MOXLHKA4JDHNKQBMTJ6LAW3JD4XJPA',
    QueryStatus: {
      CumulativeBytesMetered: 122021619,
      CumulativeBytesScanned: 122021619,
      ProgressPercentage: 100,
    },
    Rows: [
      {
        Data: [
          {
            ScalarValue: 'FE-xavier-200419',
          },
          {
            ScalarValue: '849383',
          },
          {
            ScalarValue: '241884',
          },
          {
            ScalarValue: '297254',
          },
          {
            ScalarValue: '310110',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'FE-xavier-200470',
          },
          {
            ScalarValue: '16971',
          },
          {
            ScalarValue: '2926',
          },
          {
            ScalarValue: '154',
          },
          {
            ScalarValue: '13890',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'FE-xavier-200470-1',
          },
          {
            ScalarValue: '459',
          },
          {
            ScalarValue: '59',
          },
          {
            ScalarValue: '3',
          },
          {
            ScalarValue: '397',
          },
        ],
      },
    ],
  },
  [GraphType.AUDIENCE_BY_DEMOGRAPHIC]: {
    $metadata: {
      httpStatusCode: 200,
      requestId: 'XBE5PBAN5L3BTS3JI5XCEAQWKM',
      attempts: 1,
      totalRetryDelay: 0,
    },
    ColumnInfo: [
      {
        Name: 'gender',
        Type: {
          ScalarType: 'VARCHAR',
        },
      },
      {
        Name: 'age_group',
        Type: {
          ScalarType: 'INTEGER',
        },
      },
      {
        Name: 'total',
        Type: {
          ScalarType: 'BIGINT',
        },
      },
    ],
    QueryId: 'AEFACANDO3VFYXGIODAM2INQMPCKVQMBMX4A6ZMCOXU6IGTLNUJXHL7KQG2FBOQ',
    QueryStatus: {
      CumulativeBytesMetered: 122021619,
      CumulativeBytesScanned: 122021619,
      ProgressPercentage: 100,
    },
    Rows: [
      {
        Data: [
          {
            ScalarValue: 'male',
          },
          {
            ScalarValue: '40',
          },
          {
            ScalarValue: '24290',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'female',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '542',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'male',
          },
          {
            ScalarValue: '20',
          },
          {
            ScalarValue: '210475',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'male',
          },
          {
            ScalarValue: '60',
          },
          {
            ScalarValue: '1',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'male',
          },
          {
            ScalarValue: '30',
          },
          {
            ScalarValue: '124060',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'female',
          },
          {
            ScalarValue: '50',
          },
          {
            ScalarValue: '1674',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'female',
          },
          {
            ScalarValue: '70',
          },
          {
            ScalarValue: '21',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'male',
          },
          {
            ScalarValue: '10',
          },
          {
            ScalarValue: '12812',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'female',
          },
          {
            ScalarValue: '30',
          },
          {
            ScalarValue: '99180',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'female',
          },
          {
            ScalarValue: '10',
          },
          {
            ScalarValue: '848',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'female',
          },
          {
            ScalarValue: '40',
          },
          {
            ScalarValue: '4407',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'female',
          },
          {
            ScalarValue: '20',
          },
          {
            ScalarValue: '383417',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'male',
          },
          {
            ScalarValue: '50',
          },
          {
            ScalarValue: '3435',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'male',
          },
          {
            ScalarValue: '70',
          },
          {
            ScalarValue: '35',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'male',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '1616',
          },
        ],
      },
    ],
  },
  [GraphType.AREA_SCORE]: {
    $metadata: {
      httpStatusCode: 200,
      requestId: 'A5NBP2W7JXMEVLZOD75JB5NCNU',
      attempts: 1,
      totalRetryDelay: 0,
    },
    ColumnInfo: [
      {
        Name: 'gender',
        Type: {
          ScalarType: 'VARCHAR',
        },
      },
      {
        Name: 'device_id',
        Type: {
          ScalarType: 'VARCHAR',
        },
      },
      {
        Name: 'positive',
        Type: {
          ScalarType: 'BIGINT',
        },
      },
      {
        Name: 'negative',
        Type: {
          ScalarType: 'BIGINT',
        },
      },
    ],
    QueryId: 'AEFACANDO3VA7GBHFAM4CCHUA7PWLX5XE4MSJL4TKRE6Y45WRHL7EUZM4NFBLEQ',
    QueryStatus: {
      CumulativeBytesMetered: 122021619,
      CumulativeBytesScanned: 122021619,
      ProgressPercentage: 100,
    },
    Rows: [
      {
        Data: [
          {
            ScalarValue: 'female',
          },
          {
            ScalarValue: 'FE-xavier-200470-1',
          },
          {
            ScalarValue: '55',
          },
          {
            ScalarValue: '325',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'female',
          },
          {
            ScalarValue: 'FE-xavier-200470',
          },
          {
            ScalarValue: '2478',
          },
          {
            ScalarValue: '11982',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'female',
          },
          {
            ScalarValue: 'FE-xavier-200419',
          },
          {
            ScalarValue: '188683',
          },
          {
            ScalarValue: '171221',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'male',
          },
          {
            ScalarValue: 'FE-xavier-200470',
          },
          {
            ScalarValue: '448',
          },
          {
            ScalarValue: '1908',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'male',
          },
          {
            ScalarValue: 'FE-xavier-200419',
          },
          {
            ScalarValue: '53201',
          },
          {
            ScalarValue: '138889',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'male',
          },
          {
            ScalarValue: 'FE-xavier-200470-1',
          },
          {
            ScalarValue: '4',
          },
          {
            ScalarValue: '72',
          },
        ],
      },
    ],
  },
  [GraphType.EMOTION_OVERVIEW]: {},
  [GraphType.ENGAGEMENT_BY_GENDER]: {
    $metadata: {
      httpStatusCode: 200,
      requestId: 'LQJONBAGAYC5HYVVYZ7MB6BQL4',
      attempts: 1,
      totalRetryDelay: 0,
    },
    ColumnInfo: [
      {
        Name: 'time',
        Type: {
          ScalarType: 'VARCHAR',
        },
      },
      {
        Name: 'male',
        Type: {
          ScalarType: 'BIGINT',
        },
      },
      {
        Name: 'female',
        Type: {
          ScalarType: 'BIGINT',
        },
      },
    ],
    QueryId: 'AEFACANDO3VCPGQMHCTSST55JR7DDOSMLMI3REM7R6CTHJJ4JYPGT2HKMHNRKJI',
    QueryStatus: {
      CumulativeBytesMetered: 122021619,
      CumulativeBytesScanned: 122021619,
      ProgressPercentage: 100,
    },
    Rows: [
      {
        Data: [
          {
            ScalarValue: '2022-02-01T04:48:00',
          },
          {
            ScalarValue: '56',
          },
          {
            ScalarValue: '59',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-01T17:45:36',
          },
          {
            ScalarValue: '61',
          },
          {
            ScalarValue: '56',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-02T06:43:12',
          },
          {
            ScalarValue: '57',
          },
          {
            ScalarValue: '60',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-02T19:40:48',
          },
          {
            ScalarValue: '75',
          },
          {
            ScalarValue: '54',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-03T08:38:24',
          },
          {
            ScalarValue: '41',
          },
          {
            ScalarValue: '52',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-03T21:36:00',
          },
          {
            ScalarValue: '68',
          },
          {
            ScalarValue: '38',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-04T10:33:36',
          },
          {
            ScalarValue: '65',
          },
          {
            ScalarValue: '58',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-04T23:31:12',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-05T12:28:48',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-06T01:26:24',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-06T14:24:00',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-07T03:21:36',
          },
          {
            ScalarValue: '46',
          },
          {
            ScalarValue: '51',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-07T16:19:12',
          },
          {
            ScalarValue: '51',
          },
          {
            ScalarValue: '42',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-08T05:16:48',
          },
          {
            ScalarValue: '46',
          },
          {
            ScalarValue: '47',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-08T18:14:24',
          },
          {
            ScalarValue: '68',
          },
          {
            ScalarValue: '47',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-09T07:12:00',
          },
          {
            ScalarValue: '44',
          },
          {
            ScalarValue: '44',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-09T20:09:36',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-10T09:07:12',
          },
          {
            ScalarValue: '43',
          },
          {
            ScalarValue: '34',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-10T22:04:48',
          },
          {
            ScalarValue: '48',
          },
          {
            ScalarValue: '34',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-11T11:02:24',
          },
          {
            ScalarValue: '44',
          },
          {
            ScalarValue: '28',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-12T00:00:00',
          },
          {
            ScalarValue: '37',
          },
          {
            ScalarValue: '0',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-12T12:57:36',
          },
          {
            ScalarValue: '52',
          },
          {
            ScalarValue: '0',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-13T01:55:12',
          },
          {
            ScalarValue: '23',
          },
          {
            ScalarValue: '68',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-13T14:52:48',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-14T03:50:24',
          },
          {
            ScalarValue: '40',
          },
          {
            ScalarValue: '23',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-14T16:48:00',
          },
          {
            ScalarValue: '35',
          },
          {
            ScalarValue: '19',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-15T05:45:36',
          },
          {
            ScalarValue: '45',
          },
          {
            ScalarValue: '39',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-15T18:43:12',
          },
          {
            ScalarValue: '49',
          },
          {
            ScalarValue: '59',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-16T07:40:48',
          },
          {
            ScalarValue: '40',
          },
          {
            ScalarValue: '29',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-16T20:38:24',
          },
          {
            ScalarValue: '24',
          },
          {
            ScalarValue: '44',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-17T09:36:00',
          },
          {
            ScalarValue: '21',
          },
          {
            ScalarValue: '46',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-17T22:33:36',
          },
          {
            ScalarValue: '42',
          },
          {
            ScalarValue: '28',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-18T11:31:12',
          },
          {
            ScalarValue: '37',
          },
          {
            ScalarValue: '24',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-19T00:28:48',
          },
          {
            ScalarValue: '49',
          },
          {
            ScalarValue: '0',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-19T13:26:24',
          },
          {
            ScalarValue: '27',
          },
          {
            ScalarValue: '0',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-20T02:24:00',
          },
          {
            ScalarValue: '33',
          },
          {
            ScalarValue: '0',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-20T15:21:36',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-21T04:19:12',
          },
          {
            ScalarValue: '39',
          },
          {
            ScalarValue: '28',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-21T17:16:48',
          },
          {
            ScalarValue: '40',
          },
          {
            ScalarValue: '38',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-22T06:14:24',
          },
          {
            ScalarValue: '40',
          },
          {
            ScalarValue: '68',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-22T19:12:00',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-23T08:09:36',
          },
          {
            ScalarValue: '41',
          },
          {
            ScalarValue: '44',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-23T21:07:12',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-24T10:04:48',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-24T23:02:24',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-25T12:00:00',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-26T00:57:36',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-26T13:55:12',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-27T02:52:48',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-27T15:50:24',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: '2022-02-28T04:48:00',
          },
          {
            ScalarValue: '0',
          },
          {
            ScalarValue: '0',
          },
        ],
      },
    ],
  },
  [GraphType.EXPERIENCE_SCORE]: {
    $metadata: {
      httpStatusCode: 200,
      requestId: 'USPC34672E5ML5WQFWAHDZRXPM',
      attempts: 1,
      totalRetryDelay: 0,
    },
    ColumnInfo: [
      {
        Name: 'gender',
        Type: {
          ScalarType: 'VARCHAR',
        },
      },
      {
        Name: 'positive',
        Type: {
          ScalarType: 'BIGINT',
        },
      },
      {
        Name: 'negative',
        Type: {
          ScalarType: 'BIGINT',
        },
      },
    ],
    QueryId: 'AEFACANDO3VJAHWWHHJQGKPDMA6EVOL7R35EDPGV2TVUMTY6UGDHIPPLKQHQDAI',
    QueryStatus: {
      CumulativeBytesMetered: 122021619,
      CumulativeBytesScanned: 122021619,
      ProgressPercentage: 100,
    },
    Rows: [
      {
        Data: [
          {
            ScalarValue: 'male',
          },
          {
            ScalarValue: '53653',
          },
          {
            ScalarValue: '140869',
          },
        ],
      },
      {
        Data: [
          {
            ScalarValue: 'female',
          },
          {
            ScalarValue: '191216',
          },
          {
            ScalarValue: '183528',
          },
        ],
      },
    ],
  },
};
