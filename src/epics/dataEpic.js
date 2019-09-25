import {ofType} from 'redux-observable';
import {switchMap, takeUntil} from 'rxjs/operators';
import {interval, of, timer} from 'rxjs';
import {ajax} from 'rxjs/ajax';

const getDataSuccess = (data) => {
    return {
        type: 'GET_DATA',
        payload: data
    };
};

export default (action$) => action$.pipe(
    ofType('FETCH_DATA'),
    switchMap(() => {
        return timer(0, 4000).pipe(
            takeUntil(action$.ofType('STOP_POLLING')),
            switchMap(() => {
                    return ajax({
                        url: 'https://newsapi.org/v2/top-headlines?country=us&apiKey=9f5f862666cc4aa08c2e5f5c61a85e83',
                        crossDomain: true
                    }).pipe(switchMap((res) => {
                        return of(getDataSuccess(res.response));
                    }))
                }
            )
        );
    })
);
