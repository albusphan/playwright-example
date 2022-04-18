import { Page } from '@playwright/test';

export function getMeSuccess(page: Page) {
  return page.route(
    'https://access.sandbox.predictablexp.com/users/me',
    (route) =>
      route.fulfill({
        status: 200,
        contentType: 'application/json',
        headers: {
          'access-control-allow-origin':
            'https://heartbeat.sandbox.predictablexp.com',
          'Access-Control-Allow-Credentials': 'true',
        },
        body: JSON.stringify({
          username: '15a56880-033d-471f-ac68-b102c8506e90',
          companies: [
            {
              id: 'b8fd7715-464b-46df-9e7f-465293d73755',
              name: 'Minh Phan',
              role: 'admin',
            },
            {
              id: '70083193-9b75-4925-a30c-91a49ee3eaab',
              name: 'Minh Phan',
              role: 'admin',
            },
          ],
        }),
      })
  );
}
