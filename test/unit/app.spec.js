describe('app', function () {
    'use strict';

    var app = window.app;

    describe('generateMessage', function () {
        it('should check number of vowels and if text is palindrom', function () {
            expect(app.generateMessage("aibohphobia")).toEqual({vowel: 6, palindrome: true})
            expect(app.generateMessage("marcinek")).toEqual({vowel: 3, palindrome: false})
            expect(function () {
                app.generateMessage("")
            }).toThrow()
        });
    });

    describe('isPalindrome', function () {

        describe('toHaveBeenCalled', function () {
            beforeAll(function () {
                spyOn(app, "isPalindrome");
                app.generateMessage("marcin")
            })
            it('should call isPalindrome function', function () {
                expect(app.isPalindrome).toHaveBeenCalled()
                expect(app.isPalindrome).toHaveBeenCalledWith("marcin")
            })
        });

        describe('and.callThrough', function () {
            beforeAll(function () {
                spyOn(app, "isPalindrome").and.callThrough();
                app.generateMessage("marcin");
            })
            it('should call isPalindrome function when generateMessage is call', function () {
                expect(app.isPalindrome).toHaveBeenCalled()
                expect(app.isPalindrome).toHaveBeenCalledWith("marcin")
            })
        });

        describe('and.returnValue', function () {
            var isPalindrome;
            beforeAll(function () {
                spyOn(app, "isPalindrome").and.returnValue(true);
            })
            it('should call isPalindrome and return true', function () {
                isPalindrome = app.isPalindrome("aibohphobia")
                expect(isPalindrome).toBe(true)
            })

            it('should call generateMessage and isPalindrome should return true', function () {
                isPalindrome = app.generateMessage("aibohphobia")
                expect(isPalindrome).toEqual({vowel: 6, palindrome: true})
            })
        });

        describe('and.callFake', function () {
            var isPalindrome;
            beforeAll(function () {
                spyOn(app, "isPalindrome").and.callFake(function (str) {
                    return false;
                });
            })
            it('should call isPalindrome fake function', function () {
                isPalindrome = app.isPalindrome("aibohphobia")
                expect(isPalindrome).toBe(false)
            })

            it('should call generateMessage and isPalindrome fake function', function () {
                isPalindrome = app.generateMessage("aibohphobia")
                expect(isPalindrome).toEqual({vowel: 6, palindrome: false})
            })
        });

        describe('calls.count()', function () {
            var isPalindrome;
            beforeAll(function () {
                spyOn(app, "isPalindrome").and.callThrough()
            })
            it('should check that isPalindrome is called one time', function () {
                isPalindrome = app.isPalindrome("aibohphobia")
                expect(app.isPalindrome.calls.count()).toBe(1)
            })

            it('should call generateMessage and isPalindrome fake function', function () {
                isPalindrome = app.generateMessage("aibohphobia")
                expect(app.isPalindrome.calls.count()).toBe(2)
            })
        });
    });

    describe('vowelCount', function () {

        describe('toHaveBeenCalled', function () {
            beforeAll(function () {
                spyOn(app, "vowelCount");
                app.generateMessage("marcin")
            })
            it('should call isPalindrome function', function () {
                expect(app.vowelCount).toHaveBeenCalled()
                expect(app.vowelCount).toHaveBeenCalledWith("marcin")
            })
        });

        describe('and.callThrough', function () {
            beforeAll(function () {
                spyOn(app, "vowelCount").and.callThrough();
                app.generateMessage("marcin");
            })
            it('should call isPalindrome function when generateMessage is call', function () {
                expect(app.vowelCount).toHaveBeenCalled()
                expect(app.vowelCount).toHaveBeenCalledWith("marcin")
            })
        });

        describe('and.returnValue', function () {
            var vowelCount;
            beforeAll(function () {
                spyOn(app, "vowelCount").and.returnValue(6);
            })
            it('should call vovelCount and return 6', function () {
                vowelCount = app.vowelCount("aibohphobia")
                expect(vowelCount).toBe(6)
            })

            it('should call generateMessage and vowelCount should return true', function () {
                vowelCount = app.generateMessage("aibohphobia")
                expect(vowelCount).toEqual({vowel: 6, palindrome: true})
            })
        });

        describe('and.callFake', function () {
            var vowelCount;
            beforeAll(function () {
                spyOn(app, "vowelCount").and.callFake(function (str) {
                    return false;
                });
            })
            it('should call vowelCount fake function', function () {
                vowelCount = app.vowelCount("aibohphobia")
                expect(vowelCount).toBe(false)
            })
        });

        describe('calls.count()', function () {
            var vowelCount;
            beforeAll(function () {
                spyOn(app, "vowelCount").and.callThrough()
            })
            it('should check that vowelCount is called one time', function () {
                vowelCount = app.vowelCount("aibohphobia")
                expect(app.vowelCount.calls.count()).toBe(1)
            })

            it('should call generateMessage and vowelCount fake function', function () {
                vowelCount = app.generateMessage("aibohphobia")
                expect(app.vowelCount.calls.count()).toBe(2)
            })
        });
    });
});

