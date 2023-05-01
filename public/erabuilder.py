result = []

while True:
    action = input('action:')
    if action == 'end':
        print(result)
        break
    else:
        date = input('date:')
        thing = input('thing:')
        other = []
        while True:
            other.append(input('other:'))
            if input('continue?') == 'no':
                break
        result.append(
            f"\u007b date: new Date('{date}'), thing: '{thing}', other: {other} \u007d")
