import { TestBed } from '@angular/core/testing';

import { UserServices } from './user.services';
import { HttpClientTestingModule, HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';

describe('UserServices', () => {
  let service: UserServices;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [provideHttpClientTesting],
    });
    service = TestBed.inject(UserServices);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch users', () => {
    const mockData = ['Alice', 'Bob'];

    service.getUsers().subscribe((data) => {
      expect(data.length).toBe(2);
      expect(data).toEqual(mockData);
    });

    const req = httpMock.expectOne('/api/users');
    expect(req.request.method).toBe('GET');

    req.flush(mockData);
  });

  it('should post new user', () => {
    const newUser = 'Charlie';

    service.addUser(newUser).subscribe((res) => {
      expect(res).toEqual( 'Success');
    });

    const req = httpMock.expectOne('/api/users');
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual({ name: 'Charlie' });

    req.flush('Success');
  });

  it('should handle error', () => {
    service.getUsers().subscribe({
      next: () => fail('should have failed with 404 error'),
      error: (err) => expect(err.status).toBe(500),
    });
    const req = httpMock.expectOne('/api/users');
    req.flush('Something went wrong', {
      status: 500,
      statusText: 'Internal Server Error',
    });
  });
});
