import { Page } from '@playwright/test';
import { data, GraphTypeStr } from './chartData';

export function getGraph(page: Page) {
  return page.route(
    'https://facial-timestream-api.sandbox.predictablexp.com/graph',
    (route, request) => {
      const type = request.postDataJSON()?.graphType as GraphTypeStr;

      const body = data?.[type] || '';

      return route.fulfill({
        status: 200,
        contentType: 'application/json',
        headers: {
          'access-control-allow-origin':
            'https://heartbeat.sandbox.predictablexp.com',
          'Access-Control-Allow-Credentials': 'true',
        },
        body: JSON.stringify(body),
      });
    }
  );
}
