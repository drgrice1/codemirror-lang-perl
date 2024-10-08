// Note that 'eval' and 'do' are not in this list as they can accept a block.
export const namedUnaryOperators = [
    'abs',
    'alarm',
    'await',
    'caller',
    'chdir',
    'chr',
    'chroot',
    'close',
    'closedir',
    'cos',
    'defined',
    'delete',
    'eof',
    'evalbytes',
    'exists',
    'exit',
    'exp',
    'fileno',
    'getc',
    'gethostbyname',
    'getnetbyname',
    'getpgrp',
    'getprotobyname',
    'glob',
    'gmtime',
    'hex',
    'int',
    'lc',
    'lcfirst',
    'length',
    'localtime',
    'lock',
    'log',
    'lstat',
    'oct',
    'ord',
    'pos',
    'quotemeta',
    'rand',
    'readdir',
    'readline',
    'readlink',
    'readpipe',
    'reset',
    'rewinddir',
    'ref',
    'rmdir',
    'scalar',
    'select',
    'sin',
    'sleep',
    'sqrt',
    'srand',
    'stat',
    'tell',
    'telldir',
    'tied',
    'uc',
    'ucfirst',
    'umask',
    'undef',
    'untie'
];

// The list operators that can operate on a block (grep, map, join, sort, and unpack) are handled separately.
export const listOperators = [
    'atan2',
    'chomp',
    'chop',
    'chmod',
    'chown',
    'crypt',
    'die',
    'fcntl',
    'flock',
    'getpriority',
    'index',
    'ioctl',
    'kill',
    'link',
    'mkdir',
    'open',
    'opendir',
    'pack',
    'pipe',
    'read',
    'rename',
    'reverse',
    'rindex',
    'seek',
    'seekdir',
    'setpgrp',
    'setpriority',
    'split',
    'sprintf',
    'substr',
    'symlink',
    'syscall',
    'sysopen',
    'sysread',
    'sysseek',
    'syswrite',
    'tie',
    'truncate',
    'unlink',
    'utime',
    'vec',
    'waitpid',
    'warn'
];
