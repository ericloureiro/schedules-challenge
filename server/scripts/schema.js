import jsf from 'json-schema-faker';
import faker from '@faker-js/faker';

jsf.extend('faker', () => faker);

const schema = {
  type: 'object',
  properties: {
    schedules: {
      type: 'array',
      minItems: 15,
      items: {
        properties: {
          id: {
            $ref: '#/definitions/positiveInt',
          },
          name: {
            type: 'string',
            faker: 'commerce.productName',
          },
          description: {
            type: 'string',
            faker: 'commerce.productDescription',
          },
          intervalType: {
            type: 'string',
            pattern: 'Never|Once|Hour|Day|Week|Month|Year|Minute|Second',
          },
          timePeriod: {
            type: 'integer',
            minimum: 1,
            maximum: 31,
          },
          isRetired: {
            type: 'boolean',
          },
          tasksCount: {
            type: 'integer',
            minimum: 1,
            maximum: 10,
          },
          startPoint: {
            type: 'string',
            faker: 'date.past',
            format: 'date-time',
          },
          endPoint: {
            type: 'string',
            faker: 'date.recent',
            format: 'date-time',
          },
          dayOfWeek: {
            type: 'integer',
            minimum: 1,
            maximum: 7,
          },
          dayOfMonth: {
            type: 'integer',
            minimum: 1,
            maximum: 31,
          },
          startDate: {
            type: 'string',
            faker: 'date.past',
            format: 'date-time',
          },
          endDate: {
            type: 'string',
            faker: 'date.recent',
            format: 'date-time',
          },
        },
        required: ['id', 'name', 'description', 'isRetired', 'tasksCount', 'startPoint', 'endPoint', 'dayOfWeek', 'dayOfMonth', 'startDate', 'endDate'],
      },
    },
    scheduleLogs: {
      type: 'array',
      minItems: 450,
      items: {
        id: {
          $ref: '#/definitions/positiveInt',
        },
        startTime: {
          type: 'string',
          faker: 'date.past',
          format: 'date-time',
        },
        endTime: {
          type: 'string',
          faker: 'date-recent',
          format: 'date-time',
        },
        status: {
          type: 'string',
          pattern:'Pending|Running|Terminated|Completed|Exception',
        },
        serverName: {
          type: 'string',
          faker: 'company.companyName'
        },
        scheduleId: {
          type: 'integer',
        }
      },
      required: ['id', 'startTime', 'endTime', 'status', 'serverName', 'scheduleId'],
    },
  },
  required: ['schedules', 'scheduleLogs'],
  definitions: {
    positiveInt: {
      type: 'integer',
      minimum: 1,
      exclusiveMinimum: true
    }
  }
};

const generatedData = await jsf.resolve(schema);
const scheduleIds = generatedData.schedules.map(schedule => schedule.id);

export const mockData = {
  schedules: [...generatedData.schedules],
  scheduleLogs: generatedData.scheduleLogs.map((log, index) => ({
    ...log,
    scheduleId: scheduleIds[index % scheduleIds.length],
  })),
};
